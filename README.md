This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Using Stripe to create a new Business 
- [Stripe website](https://stripe.com/en-mx?utm_campaign=BR_en_Search_Brand_Brand_EXA-15088005049&utm_medium=cpc&utm_source=google&ad_content=556495423092&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gad_source=1&gclid=Cj0KCQjw6PGxBhCVARIsAIumnWYuu9EpmJERplayxTHa70lOKLK4S4VLEO3EsH03NE60iZs50TjPb24aArsdEALw_wcB)
- Add products to yout Business and add the public and secret key to a file .env.local. This file must be on your the root of your NEXT's folder project.
- Your .env.local file should look like this:
  
```bash
# Stripe
STRIPE_PUBLIC_KEY=pk_test_23PKASDMKSAOCVZV1EYI0ypRwUIP6pTwD2MC2RD1RWnEHoX3vYpg7jexKr4pAn0qAMSAK632DVASEfdsuddDJIPoq00zKfrfOvp
STRIPE_SECRET_KEY=sk_test_237LDAF4VEADCKDE81VDSW417ygU0ieDqK0w9amrJvPIpfh8BbJ4JpW1FtPiBglZSAKska4FAc53AWca6DWa2QERai00H7C9IAB
```
