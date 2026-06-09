# GCSE Chemistry Paper 2 Revision Guide

A simple, pure HTML/CSS/JavaScript revision guide for GCSE Chemistry Paper 2. No build tools, no npm — just extract and deploy.

## Features

✅ **5 Topics, 21 Sections**
- Rates of Reaction
- Equilibrium & Chemical Analysis
- Organic Chemistry
- Chemistry of the Atmosphere
- Using Resources

✅ **Interactive Content**
- Key term definitions
- Equations and formulas
- Worked examples with step-by-step solutions
- Expandable Q&A flashcards
- Exam tips
- Data tables

✅ **Professional Diagrams** (7 total)
- Activation energy diagrams
- Rate of reaction graphs
- Collision theory illustrations
- Fractional distillation columns
- Le Chatelier's principle flowcharts
- Polymerisation mechanisms
- Greenhouse effect diagrams

✅ **Responsive Design**
- Mobile-friendly interface
- Sidebar navigation
- Works on all screen sizes

## Quick Start

### Local Testing

1. Extract the ZIP file
2. Open `index.html` in a web browser
3. That's it! No installation needed.

### Deploy to GitHub

1. Create a new GitHub repository (e.g., `chem-paper-2-guide`)
2. Upload all files from this folder to the repository
3. Go to repository **Settings → Pages**
4. Select **Deploy from a branch**
5. Select **main** branch and **/root** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/chem-paper-2-guide`

### Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **Add New → Project**
4. Select your GitHub repository
5. Click **Deploy**
6. Your site will be live in ~60 seconds

## File Structure

```
├── index.html          ← Main HTML file
├── app.js              ← JavaScript app logic
├── data.js             ← All revision content
├── images/             ← Diagram images (7 total)
│   ├── activation-energy.png
│   ├── collision-theory.jpg
│   ├── fractional-distillation.jpg
│   ├── greenhouse-effect.png
│   ├── le-chatelier.png
│   ├── polymerisation.jpg
│   └── rate-graph.png
└── README.md           ← This file
```

## Customisation

### Add More Content

Edit `data.js` and add new sections following the existing structure:

```javascript
{
  id: 'section-id',
  title: 'Section Title',
  content: [
    { type: 'paragraph', text: 'Your text here' },
    { type: 'key-term', term: 'Term', definition: 'Definition' },
    { type: 'equation', text: 'Formula' },
    // ... more content items
  ]
}
```

### Change Styling

Edit the `<style>` section in `index.html` to modify colours, fonts, and spacing.

### Update Diagrams

Replace images in the `images/` folder with your own diagrams.

## Content Types

- **paragraph** — Plain text
- **key-term** — Definition with blue highlight
- **equation** — Monospace formula block
- **exam-tip** — Yellow sticky-note style tip
- **list** — Bulleted list
- **table** — Comparison table
- **qa** — Expandable Q&A flashcard
- **diagram** — Image with description
- **worked-example** — Step-by-step solution with answer

## Browser Support

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## License

This project is for educational use.

---

**Happy revising! 🧪📚**
