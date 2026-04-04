<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap — ImageToURL</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: system-ui, -apple-system, sans-serif; background: #FFFBEB; color: #1C1B1F; padding: 2rem; }
          h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 0.25rem; }
          p.meta { color: #79747E; font-size: 0.875rem; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
          th { background: #1C1B1F; color: #FFD600; text-align: left; padding: 0.75rem 1rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; }
          td { padding: 0.5rem 1rem; border-bottom: 1px solid #E7E0EC; font-size: 0.875rem; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #FFF8E1; }
          a { color: #6750A4; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .date { color: #79747E; white-space: nowrap; }
          .num { color: #79747E; text-align: right; }
          .alternates { font-size: 0.75rem; color: #79747E; }
          .alternates a { color: #79747E; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p class="meta">
          This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></strong> URLs.
        </p>
        <table>
          <thead>
            <tr>
              <th style="width:2.5rem">#</th>
              <th>URL</th>
              <th style="width:7rem">Last Modified</th>
              <th style="width:6rem">Alternates</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td class="num"><xsl:value-of select="position()" /></td>
                <td>
                  <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
                </td>
                <td class="date"><xsl:value-of select="sitemap:lastmod" /></td>
                <td class="alternates">
                  <xsl:if test="xhtml:link">
                    <xsl:value-of select="count(xhtml:link)" /> langs
                  </xsl:if>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
