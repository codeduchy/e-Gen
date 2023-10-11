AI app that provides chat, video, music, image and code generation.
<br>
With integrated Stripe payment system and Clerk authentication

### <a href="https://e-gen.vercel.app">eGen - app</a>

<hr/>

<br>

### Dev environemnt

MySQL Prisma database connection (Planetscale db)

```
npx prisma generate
npx prisma db push
npx prisma studio (development database)
```

Seed database

```
node scripts/seed.ts
```

Stripe CLI required for payment functionality in dev mode

```
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```

To run dev environment populate .env with:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=

REPLICATE_API_TOKEN=

DATABASE_URL=mysql

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

```
npm run dev
```
