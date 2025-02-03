# Real Estate Investment Analyzer

Really loved working on this project. Really proud of what I was able to build with this and just wish there were some more developer friendly DB and hosting solutions so I could keep this live.

I want to rebuild it in Next.js to make it way faster and get some experience with a full stack React framework.

If you're able to access the live site, try logging in with username ***ranegray*** and password ***123456*** to see some prefilled data to mess with.

## Screenshots & Demo

https://user-images.githubusercontent.com/75066470/231826607-1e6eb351-552b-4586-acb0-d813dd0ac7c3.mov

<img width="962" alt="Screenshot 2023-04-13 at 18 39 39" src="https://user-images.githubusercontent.com/75066470/231827382-0857d8d9-e201-43f3-bd6a-9407f2678b9b.png">
Added helpful text for the user. 

## Tech Stack

**Client:** Javascript, TailwindCSS

**Server:** Node, Express, JWT, bcrypt

**Database:** Postgres, Render, Postico, Docker


## Installation

Install vanilla-real-estate-analyser with npm or yarn

```bash
  cd vanilla-real-estate-analyser
  npm install
  npm run dev
```

While developing run, to build Tailwind CSS as you write, just refresh page to see changes:

```bash
npx tailwindcss -i ./src/styles/tailwind.css -o ./client/css/tailwind.css --watch
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL` 

`JWT_SECRET` <--- set this equal to any string


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

- Tailwind is mobile first by design
- There is always more room to tweak and adjust things, always something to add

## Contributing

Contributions are always welcome! I would love to take this project further. 

I'll chip away at it slowly but if someone wants to work together just let me know. 

