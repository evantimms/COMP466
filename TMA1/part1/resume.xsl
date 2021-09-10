<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
            <head>
                <link rel="stylesheet" href="part1.css"/>
            </head>
            <body>
            <div class='resume'>
                <div class="resume-title"><xsl:value-of select="resume/resume-title"/></div>
                <div class="resume-subtitle"><xsl:value-of select="resume/resume-subtitle"/></div>
                <hr />
                <xsl:for-each select="resume/section">
                    <div class="subtitle"><xsl:value-of select="subtitle"/></div>
                    <p class="point"><xsl:value-of select="point"/></p>
                    <xsl:if test="job">
                        <xsl:for-each select="job">
                            <div class="job-subtitle"><xsl:value-of select="job-subtitle"/></div>
                            <ul class="job-list">
                                <xsl:for-each select="job-point">
                                    <li><xsl:value-of select="."/></li>
                                </xsl:for-each>
                            </ul>
                        </xsl:for-each>
                    </xsl:if>
                </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>