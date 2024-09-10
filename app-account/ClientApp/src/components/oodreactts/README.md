# oodreactts

#### A typescript react library

## Guiding Philosophy

oodreactts is a library of components. Creating an application with the library should be like putting together building blocks: Choose a component; customize a few characteristics; place it in your app.

What does this mean from a contributor's perspective? We want to abstract _all of the css_ from the user. The only custom css a consumer should write for a component is for managing position and size.

## Themes

oodreactts ships with predefined themes. All of the components will respect the themes and style themselves accordingly. Within a theme, every component must have one of the following styles (which can be configured by the consumer):

- Primary: Primary background shade with primary foreground shade. This must be high contrast (7:1) and is intended for the primary content of the application.
- Secondary: Secondary background shade with secondary foreground shade.  This must be high contrast (7:1) and may be used for the primary content of the application.
- Tertiary: Tertiary background shade with tertiary foreground shade.  This may not be as high contrast Primary, but must be at least 4.5:1. It is not intended for the primar content of the application
- Accent: Accent background shade with accent foreground shade. This must be high contrast (7:1) and is intended for small pieces of content that should attract the user's eye.

### How did we choose contrast ratios?

- Contrast of 7:1 is the [WCAG AAA standard](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html) for standard text. Since the themes that require 7:1 contrast for signficant content, those themes should meet this standard
- Contrast of 4.5:1 is the [WCAG AAA standard](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html) for large-scale text. Since the themes that require 4.5:1 contrast are for less content and more likely to be used for headings, those themes should meet this standard.
- All themes should try to meet 7:1 contrast ratios to reduce the likelihood of accidentlly creating non-compliant applications.
