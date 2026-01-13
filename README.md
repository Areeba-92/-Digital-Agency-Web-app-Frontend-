# Digital Agency Website

A modern, responsive website for a digital agency featuring a sophisticated color scheme and professional design.

## Features

- **Modern Design**: Elegant plum/maroon color scheme with gradient accents
- **Fully Responsive**: Works on all device sizes
- **Multi-page Layout**: Complete website with all necessary pages
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Project gallery with filtering options
- **SEO Optimized**: Proper meta tags and structured content

## Color Scheme

- **Primary Gradient**: Plum/Mauve (#6D3B55 → #8B4A63)
- **Secondary Blend**: Soft purple undertone (#5A2E46)
- **Accent Colors**:
  - Teal Green: #4FB6A3
  - Coral Red: #E76F51
  - Mustard Yellow: #F4A261
  - Orange: #F77F00
  - Purple Accent: #6A4C93
- **Text Colors**: 
  - Primary: #444444
  - Secondary: #FFFFFF, #E0E0E0

## Pages

- **Home**: Main landing page with hero section and featured content
- **About**: Company story, team members, and statistics
- **Services**: Detailed service offerings with icons and descriptions
- **Portfolio**: Project showcase with filtering capabilities
- **Contact**: Contact form with business information
- **Privacy Policy**: Legal privacy information
- **Terms of Service**: Legal terms and conditions

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Deployment**: Static export compatible

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm run start
```

## Customization

To customize the website:

1. Update the color scheme in `app/globals.css`
2. Modify content in individual page files
3. Update contact information in all pages' footers
4. Replace placeholder images with your own

## Contact Form

The contact form is currently set up with mock submission. To connect it to a real backend:

1. Create an API route in `app/api/contact/route.js`
2. Connect to your preferred email service or database
3. Add proper validation and security measures

## Contributing

Feel free to fork this repository and submit pull requests for improvements.

## License

This project is open source and available under the [MIT License](LICENSE).