# Personal Portfolio Generator

A modern, customizable portfolio website built with Next.js that you can configure entirely through a JSON file. Perfect for showcasing your professional experience, skills, and achievements.

## Quick Start

Install the necessary packages and run the development server:

```bash
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Customization Options

## 1. JSON Configuration
All primary customization is done through a single JSON file - no code changes required! The site automatically updates based on your JSON configuration.

## 2. Direct Code Customization
For more advanced customization, you can modify the following files:

app/page.jsx: Main page layout and component structure
app/components/*: Individual component styling and structure
app/styles/*: Global styles and theme configurations

### JSON Structure

#### 1. License
```json
"license": {
  "text": "Your copyright and license text"
}
```

#### 2. Introduction
```json
"intro": {
  "show": true,
  "name": "Your Name",
  "avatar": "URL to your profile picture",
  "tagline": "Your Professional Title",
  "location": "Your Location",
  "quote": "A meaningful quote"
}
```

#### 3. About Section
```json
"about": {
  "show": true,
  "label": "About Me",
  "value": "Your professional biography"
}
```

#### 4. Resume Links
```json
"resume": {
  "show": true,
  "label": "View Resume",
  "url": "URL to view resume",
  "download": "URL to download resume"
}
```

#### 5. Contact Information
```json
"email": {
  "address": "your.email@domain.com",
  "url": "mailto:your.email@domain.com"
},
"contact": {
  "show": true,
  "label": "Contact Me"
}
```

#### 6. Social Links
```json
"links": {
  "label": "Social & Portfolio Links",
  "values": [
    {
      "label": "Platform Name",
      "url": "https://your-profile-url",
      "icon": "platform-icon-code"
    }
  ]
}
```

#### 7. Skills
```json
"skills": {
  "show": true,
  "label": "Skills",
  "values": [
    {
      "category": "Skill Category",
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ]
}
```

#### 8. Experience
```json
"experiences": {
  "show": true,
  "label": "Experiences",
  "values": [
    {
      "workplace": "Company Name",
      "website": "Company Website",
      "designation": "Your Title",
      "start": "Start Date",
      "end": "End Date",
      "duration": "Time Period",
      "responsibilities": ["Responsibility 1", "Responsibility 2"],
      "shift": "Full Time/Part Time",
      "nature": "Remote/On-site",
      "location": "Location"
    }
  ]
}
```

#### 9. Education
```json
"education": {
  "show": true,
  "label": "Education",
  "values": [
    {
      "institute": "School Name",
      "degree": "Degree Name",
      "result": "Grade/GPA",
      "activities": ["Activity 1", "Activity 2"],
      "start": "Start Date",
      "end": "End Date",
      "website": "School Website",
      "location": "Location"
    }
  ]
}
```

#### 10. Research (Optional)
```json
"research": {
  "show": true,
  "label": "Research",
  "values": [
    {
      "title": "Research Title",
      "authors": "Author Names",
      "conference": "Conference Name",
      "year": "Publication Year",
      "abstract": "Research Abstract",
      "URL": "Research URL"
    }
  ]
}
```

#### 11. Achievements
```json
"achievements": {
  "show": true,
  "label": "Achievements",
  "values": [
    {
      "title": "Achievement Name",
      "event": "Achievement Description",
      "url": "Related URL"
    }
  ]
}
```

### Tips for Customization

1. Toggle sections by setting `"show": false` to hide them
2. Always use complete URLs (starting with `http://` or `https://`)
3. Keep the JSON structure intact - don't remove required fields
4. All fields within each section are required unless marked as optional
5. Images should be accessible via public URLs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.