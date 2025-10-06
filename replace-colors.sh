#!/bin/bash

# Script to replace all inline color values with semantic Tailwind classes
# Ocean Blue (#006994) is the primary brand color

echo "Replacing inline color values with semantic classes..."

# Replace ocean blue backgrounds
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/bg-\[#006994\]/bg-nafaa-ocean/g'

# Replace ocean blue dark (hover states)
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/bg-\[#004D70\]/bg-nafaa-ocean-dark/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:bg-\[#004D70\]/hover:bg-nafaa-ocean-dark/g'

# Replace navy backgrounds with ocean blue
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/bg-\[#002868\]/bg-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/bg-\[#001845\]/bg-nafaa-ocean-dark/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/bg-\[#003A8C\]/bg-nafaa-ocean-light/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/bg-\[#00A0E3\]/bg-nafaa-ocean-light/g'

# Replace text colors
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-\[#006994\]/text-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-\[#002868\]/text-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-\[#004D70\]/text-nafaa-ocean-dark/g'

# Replace border colors
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/border-\[#006994\]/border-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/border-\[#002868\]/border-nafaa-ocean/g'

# Replace hover states
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:bg-\[#002868\]/hover:bg-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:bg-\[#001845\]/hover:bg-nafaa-ocean-dark/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:text-\[#006994\]/hover:text-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:text-\[#002868\]/hover:text-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:border-\[#006994\]/hover:border-nafaa-ocean/g'

# Replace gradient from colors
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/from-\[#002868\]/from-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/from-\[#001845\]/from-nafaa-ocean-dark/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/from-\[#006994\]/from-nafaa-ocean/g'

# Replace gradient via colors
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/via-\[#002868\]/via-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/via-\[#003A8C\]/via-nafaa-ocean-light/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/via-\[#006994\]/via-nafaa-ocean/g'

# Replace gradient to colors
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/to-\[#002868\]/to-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/to-\[#006994\]/to-nafaa-ocean/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/to-\[#00A0E3\]/to-nafaa-ocean-light/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/to-\[#004D70\]/to-nafaa-ocean-dark/g'

# Replace hover gradient colors
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:from-\[#001845\]/hover:from-nafaa-ocean-dark/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/hover:to-\[#004D70\]/hover:to-nafaa-ocean-dark/g'

# Replace inline styles (JavaScript/TypeScript)
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i "s/'#002868'/'var(--nafaa-ocean)'/g"
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/"#002868"/"var(--nafaa-ocean)"/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i "s/'#006994'/'var(--nafaa-ocean)'/g"
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/"#006994"/"var(--nafaa-ocean)"/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i "s/'#004D70'/'var(--nafaa-ocean-dark)'/g"
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/"#004D70"/"var(--nafaa-ocean-dark)"/g'

# Replace opacity variants
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/80/nafaa-ocean\/80/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/95/nafaa-ocean\/95/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/85/nafaa-ocean\/85/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/75/nafaa-ocean\/75/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/10/nafaa-ocean\/10/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/5/nafaa-ocean\/5/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#002868\]\/0/nafaa-ocean\/0/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#006994\]\/20/nafaa-ocean\/20/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#006994\]\/30/nafaa-ocean\/30/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#006994\]\/5/nafaa-ocean\/5/g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/\[#006994\]\/0/nafaa-ocean\/0/g'

echo "Color replacement complete!"
echo "Ocean blue (#006994) is now the primary brand color throughout the site."
