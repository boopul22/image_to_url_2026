#!/usr/bin/env python3
"""
Convert plain-<p> code examples in a TipTap-authored post into proper
<pre><code> blocks.

Detects consecutive <p> blocks that look like code (start with &lt;,
indented with &nbsp;, CSS selectors, bare { / }, markdown image syntax, etc.)
and merges them into a single <pre><code> with real newlines.

Input: the post's stored `content` HTML on stdin.
Output: transformed HTML on stdout.
"""
import re
import sys


def parse_top_level(html: str):
    blocks = []
    i = 0
    n = len(html)
    while i < n:
        m = re.match(r"\s+", html[i:])
        if m:
            i += m.end()
            continue
        m = re.match(r"<(\w+)\b([^>]*)>", html[i:])
        if not m:
            blocks.append(("_text", html[i:]))
            break
        tag = m.group(1).lower()
        if tag in ("img", "hr", "br"):
            end = i + m.end()
            blocks.append((tag, html[i:end]))
            i = end
            continue
        close_re = re.compile(fr"</{tag}\s*>", re.IGNORECASE)
        cm = close_re.search(html, i + m.end())
        if not cm:
            blocks.append((tag, html[i:]))
            break
        end = cm.end()
        blocks.append((tag, html[i:end]))
        i = end
    return blocks


def p_inner(block_html: str) -> str:
    m = re.match(r"<p[^>]*>(.*?)</p>", block_html, re.DOTALL | re.IGNORECASE)
    return m.group(1) if m else ""


def is_code_p(inner: str) -> bool:
    if not inner:
        return False
    text_only = re.sub(r"<[^>]+>", "", inner).strip()
    if not text_only:
        return False
    if text_only.startswith("&lt;"):
        return True
    if text_only == "}" or text_only == "&gt;":
        return True
    if text_only.startswith("!["):
        return True
    if text_only.startswith("[!["):
        return True
    if inner.startswith("&nbsp;"):
        return True
    if re.match(r"^[.#@][\w\-:]+", text_only) and text_only.endswith("{"):
        return True
    return False


def transform_line(inner: str) -> str:
    line = re.sub(r"<a\b[^>]*>(.*?)</a>", r"\1", inner, flags=re.DOTALL)
    line = re.sub(r"</?u\s*>", "", line)
    line = line.replace("&nbsp;", " ")
    return line


def transform(html: str) -> str:
    blocks = parse_top_level(html)
    out = []
    i = 0
    while i < len(blocks):
        tag, block_html = blocks[i]
        if tag == "p" and is_code_p(p_inner(block_html)):
            run = []
            while i < len(blocks):
                t2, h2 = blocks[i]
                if t2 == "p" and is_code_p(p_inner(h2)):
                    run.append(p_inner(h2))
                    i += 1
                else:
                    break
            lines = [transform_line(inner) for inner in run]
            code = "\n".join(lines)
            out.append(f"<pre><code>{code}</code></pre>")
        else:
            out.append(block_html)
            i += 1
    return "".join(out)


def main():
    src = sys.stdin.read()
    sys.stdout.write(transform(src))


if __name__ == "__main__":
    main()
