# Color Scheme Fixes Applied
Date: June 3, 2025

## Problem Identified
The site was using `bg-gradient-primary` which creates a gradient from `$navy-soft` to transparent white. The issue is that `$navy-soft` is defined as `tint-color($navy, 90.5%)` which means it's 90.5% white mixed with navy blue (#003366), resulting in a very light blue background that doesn't provide sufficient contrast for white text.

## Solution Applied
Changed all hero sections and gradient backgrounds from `bg-gradient-primary` to either:
- `bg-dark` - for the homepage hero
- `bg-navy` - for feature pages, solutions, resources, 404, etc.

This ensures proper contrast between the dark background and white text.

## Files Updated
1. `/workspace/lapis-legal.github.io/index.md` - Changed hero to `bg-dark`
2. `/workspace/lapis-legal.github.io/404.md` - Changed to `bg-navy` (3 instances)
3. `/workspace/lapis-legal.github.io/features.md` - Changed to `bg-navy` (3 instances)
4. `/workspace/lapis-legal.github.io/solutions.md` - Changed to `bg-navy` (3 instances)
5. `/workspace/lapis-legal.github.io/resources.md` - Changed to `bg-navy` (3 instances)
6. `/workspace/lapis-legal.github.io/resources/roi-calculator.md` - Changed to `bg-navy` (3 instances)

## Color Definitions
- **Navy**: #003366 - A dark blue that provides excellent contrast with white text
- **Navy Soft**: ~#E6EFF7 (90.5% tint) - Too light for white text
- **Dark**: Likely #212529 or similar - Standard Bootstrap dark color

## Accessibility Impact
These changes ensure:
- WCAG AA compliance for text contrast (minimum 4.5:1 ratio)
- Better readability for all users
- Consistent dark backgrounds across hero sections
- Professional appearance with proper contrast

## Additional Recommendations
1. Consider creating a custom gradient class like `bg-gradient-navy-dark` that goes from navy to dark navy instead of transparent
2. Test all button contrast ratios on the new backgrounds
3. Ensure focus indicators are visible on dark backgrounds
4. Consider adding a subtle text shadow to hero text for additional readability

## Next Steps
After rebuilding the Jekyll site, all pages should now have proper contrast between background and text colors, fixing the readability issues identified in the evaluation.