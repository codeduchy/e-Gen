AI app that provides chat, video, music, image and code generation.
<br>
With integrated Stripe payment system and Clerk authentication

### <a href="https://e-gen.vercel.app">eGen - app</a>

<hr/>

<br>

### Dev environemnt

```
npm run dev
```

Prisma db config

```
npx prisma generate
npx prisma db push
npx prisma studio
```

Stripe CLI required

```
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```
