# Event Images

This directory contains images for upcoming events.

## Required Images:

1. **world-fisheries-day.jpg** - Image for World Fisheries Day celebration
2. **investment-conference.jpg** - Image for Fishery Investment Conference

## Image Guidelines:

- **Format**: JPG or PNG
- **Dimensions**: Recommended 1200x600px (2:1 ratio)
- **Size**: Keep under 500KB for optimal loading
- **Content**: Should be relevant to the event theme

## Placeholder Images:

Until proper event images are added, the system will gracefully handle missing images by:
- Not showing the image section in the banner
- Displaying a colored background in the popup
- Using default placeholders in event cards

## Adding New Events:

When adding new events to `/src/lib/events-data.ts`, ensure the image path matches:
```
image: "/events/your-event-image.jpg"
```
