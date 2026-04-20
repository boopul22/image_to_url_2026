import os
import re
import glob

workspace = "/Volumes/Mac_ssd1/Websites/iamge_to_url/src/pages"

def get_astro_files():
    files = glob.glob(os.path.join(workspace, "**/*.astro"), recursive=True)
    seo_files = []
    for f in files:
        with open(f, 'r') as file:
            content = file.read()
            if "import ImageUploader" in content:
                seo_files.append(f)
    return seo_files

def process_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
    
    # Remove ImageUploader completely (we'll re-add it)
    new_content = re.sub(r'<!--\s*Hero\s*-->\n?\s*', '', content)
    new_content = re.sub(r'<ImageUploader\s*/>\n?\s*', '', new_content)
    
    # Hero Reordering
    wrapper_pattern = re.compile(r'<div class="max-w-5xl mx-auto px-3 sm:px-6 pt-6 sm:pt-10">\s*<header[^>]*>.*?<span[^>]*>([^<]+)</span>.*?<h1[^>]*>(.*?)(?:<span[^>]*>(.*?)</span>)?\s*</h1>.*?<p[^>]*>(.*?)</p>.*?</header>\s*</div>', re.DOTALL)
    
    def repl_header(match):
        badge = match.group(1).strip()
        h1_main = match.group(2).strip()
        h1_span = match.group(3)
        h1_span_str = f'<span class="text-rose-600">{h1_span.strip()}</span>' if h1_span else ''
        p_text = match.group(4).strip()
        
        return f'''<section class="flex flex-col max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 text-center">
    <div class="mb-4 sm:mb-6">
      <div class="inline-block bg-rose-600 text-white px-3 py-1 font-headline text-[10px] font-semibold uppercase tracking-widest mb-3 border-2 border-neutral-900">
        {badge}
      </div>
      <h1 class="font-headline text-xl sm:text-2xl md:text-3xl font-semibold text-on-background leading-[1.05] tracking-tighter uppercase mb-2 sm:mb-3">
        {h1_main} {h1_span_str}
      </h1>
      <p class="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-md mx-auto mb-0 px-2">
        {p_text}
      </p>
    </div>

    <!-- Upload Area -->
    <ImageUploader />
  </section>'''

    new_content = wrapper_pattern.sub(repl_header, new_content)
    
    # Headings
    heading_pattern = re.compile(r'<div class="flex items-baseline gap-4 mb-5 sm:mb-8 reveal">\s*<h2[^>]*>(.*?)</h2>\s*<div class="h-1 flex-grow[^>]*></div>\s*</div>', re.DOTALL)
    def repl_heading(match):
        return f'''<div class="text-center mb-5 sm:mb-8 reveal">
        <h2 class="font-headline text-lg sm:text-xl font-black text-on-background mb-2 sm:mb-3">{match.group(1).strip()}</h2>
      </div>'''
    new_content = heading_pattern.sub(repl_heading, new_content)
    
    # Grid Cards
    card_pattern2 = re.compile(
        r'<div class="bg-[^"]+ border-2 border-on-background p-4 sm:p-5 rounded-xl hard-shadow reveal">\s*(?:<span class="inline-block font-black font-headline text-lg sm:text-xl opacity-15 mb-3">\d+</span>\s*)?<div class="w-\d+ sm:w-\d+ h-\d+ sm:h-\d+ bg-white border-2 border-on-background rounded-lg flex items-center justify-center mb-3 sm:mb-4">\s*<span class="material-symbols-outlined text-primary text-lg sm:text-xl">([^<]+)</span>\s*</div>\s*<h3 class="text-base sm:text-lg font-black font-headline mb-2">(.*?)</h3>\s*<p class="font-body text-on-surface-variant(?: text-sm)?">([\s\S]*?)</p>\s*</div>',
        re.DOTALL
    )
    def repl_card(match):
        icon = match.group(1).strip()
        title = match.group(2).strip()
        desc = match.group(3).strip()
        return f'''<div class="reveal bg-surface-container rounded-2xl p-4 sm:p-5 hover:-translate-y-0.5 transition-transform cursor-default">
          <span class="material-symbols-outlined text-primary text-2xl mb-2 block">{icon}</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{title}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{desc}</p>
        </div>'''
    new_content = card_pattern2.sub(repl_card, new_content)
    
    # FAQ Section
    faq_pattern = re.compile(
        r'<details class="group border-2 border-on-background hard-shadow mb-3">\s*<summary class="flex items-center justify-between p-4 sm:p-5 cursor-pointer font-headline font-bold text-sm sm:text-base">\s*(?:<span>)?([\s\S]*?)(?:</span>)?\s*<span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>\s*</summary>\s*<div class="px-4 sm:px-5 pb-4 sm:pb-5 font-body text-on-surface-variant text-sm sm:text-base">([\s\S]*?)</div>\s*</details>',
        re.DOTALL
    )
    def repl_faq(match):
        q = match.group(1).strip()
        q = re.sub(r'</?span>', '', q)
        a = match.group(2).strip()
        return f'''<details class="group bg-surface-container rounded-xl mb-3 overflow-hidden">
          <summary class="flex items-center justify-between p-4 sm:p-5 cursor-pointer font-headline font-black text-on-background text-sm sm:text-base hover:bg-surface-variant/50 transition-colors">
            <span class="pr-4">{q}</span>
            <span class="material-symbols-outlined text-on-surface-variant flex-shrink-0 transition-transform duration-200 group-open:rotate-180">expand_more</span>
          </summary>
          <div class="px-4 sm:px-5 pb-4 sm:pb-5 font-body text-on-surface-variant text-sm leading-relaxed">{a}</div>
        </details>'''
    new_content = faq_pattern.sub(repl_faq, new_content)

    # CTA Section
    cta_pattern = re.compile(
        r'<div class="bg-on-surface text-surface rounded-xl p-5 sm:p-8 border-2 border-on-surface hard-shadow text-center">\s*<h2[^>]*>(.*?)</h2>\s*<p[^>]*>([\s\S]*?)</p>\s*<a href="([^"]+)" class="(?:[^"]*cta-btn|[^"]*px-6 py-3 border-2 border-on-background[^"]*)">\s*(.*?)\s*</a>\s*</div>',
        re.DOTALL
    )
    def repl_cta(match):
        t = match.group(1).strip() if match.group(1) else ''
        p = match.group(2).strip() if match.group(2) else ''
        link = match.group(3).strip() if match.group(3) else ''
        btn = match.group(4).strip() if match.group(4) else ''
        return f'''<div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="font-headline text-lg sm:text-xl font-black text-on-background mb-3 sm:mb-4 reveal">{t}</h2>
        <p class="font-body text-on-surface-variant text-sm mb-3 sm:mb-4 reveal">{p}</p>
        <a href="{link}" class="reveal inline-block bg-primary text-on-primary px-8 py-3 rounded-xl font-headline font-black text-sm uppercase tracking-wider hover:-translate-y-1 transition-transform">
          {btn}
        </a>
      </div>'''
    new_content = cta_pattern.sub(repl_cta, new_content)
    
    # Related Tools Link Cards
    tool_pattern = re.compile(
        r'<a href="([^"]+)" class="border-2 border-on-background p-5 sm:p-6 rounded-xl hard-shadow hover:-translate-y-1 transition-transform flex items-center justify-between gap-3">\s*<div>\s*<h3 class="font-headline font-bold text-base mb-1">(.*?)</h3>\s*<p class="text-sm text-on-surface-variant(?: leading-relaxed)?">([\s\S]*?)</p>\s*</div>\s*<span class="material-symbols-outlined text-primary">arrow_forward</span>\s*</a>',
        re.DOTALL
    )
    def repl_tool(match):
        href = match.group(1).strip()
        name = match.group(2).strip()
        desc = match.group(3).strip()
        return f'''<a href="{href}" class="bg-surface-container p-5 sm:p-6 rounded-2xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-between gap-3 group">
          <div>
            <h3 class="font-headline font-bold text-base mb-1 group-hover:text-primary transition-colors">{name}</h3>
            <p class="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
          </div>
          <span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>'''
    new_content = tool_pattern.sub(repl_tool, new_content)

    if new_content != content:
        with open(filepath, 'w') as file:
            file.write(new_content)
        print(f"[SUCCESS] Updated {filepath}")

for f in get_astro_files():
    process_file(f)
