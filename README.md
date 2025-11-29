# 245D Employee Onboarding System

A Next.js 15 Full-Stack Project

This project is a streamlined onboarding system designed specifically for Minnesota 245D home and community-based service providers. It replaces messy paper checklists, email threads, and disorganized onboarding processes with a clean, trackable, admin-driven workflow.

Built following the same full-stack structure as the Dave Gray (🔗 https://www.youtube.com/DaveGrayTeachesCode) repair shop tutorial—using passwordless auth, role-based access, database relations, and real-time admin views.

## 📌 User Stories

### Replace Sticky Note System
Replace messy onboarding checklists with one centralized digital system.

### Public Page
Provide a public-facing page with basic agency info and a login button.

### Authentication
Add passwordless employee login (Magic Link OR GitHub provider).

### Admin Dashboard
After admin login, show a real-time Employees in Onboarding list.

### Employee Search/Filter
Admin can search or filter employees by name, role, or onboarding status.

### Logout
Provide a logout option.

### Login Requirement
Require users to log in at least once per week.

### Disable Access
Admin can instantly remove or disable employee access.

## Employee Data Model
### Employees have:
ID, full address, phone, email, role, onboarding status, notes.

### Onboarding Step Data Model
Steps have:
ID, title, description, status, created/updated dates.

### Onboarding Step States
Steps can be OPEN or COMPLETED.

### Step Assignment
Each onboarding step is assigned to a specific employee.

### Permissions
System roles: Employee and Admin.

### Admin Abilities
Admins can create & view employee records.

### Template Management
Admins can create, edit, and assign 245D onboarding templates.

### Employee Abilities
Employees can only view and complete their own onboarding steps.

### Admin Step Control
Admins can view, edit, or reset all employee onboarding steps.

### Desktop-First UX
Desktop is primary, tablet support secondary.

### Light / Dark Mode
Implement Shadcn’s theme system for dark/light mode.

### Support Monitoring
Integrate Sentry to monitor issues and errors.

## 🛠️ Tech Stack/References
- 🔗 [Next.js](https://nextjs.org/)
- 🔗 [React](https://react.dev/)
- 🔗 [TypeScript](https://www.typescriptlang.org/)
- 🔗 [TailwindCSS](https://tailwindcss.com/)
- 🔗 [ShadCN/ui](https://ui.shadcn.com/)
- 🔗 [Sentry](https://bit.ly/sentry-docs-dg)
- 🔗 [Kinde Auth](https://kinde.com/dgray-nextjsstack/)
- 🔗 [Neon Postgres](https://fyi.neon.tech/davegray)
- 🔗 [Drizzle ORM](https://orm.drizzle.team/)
- 🔗 [react-hook-form](https://react-hook-form.com/)
- 🔗 [Zod](https://zod.dev/)
- 🔗 [next-safe-action](https://next-safe-action.dev/)
- 🔗 [TanStack Table](https://tanstack.com/table/latest)
- 🔗 [Vercel](https://vercel.com/home)

## 🚀 Project Setup
### Install Dependencies
npm install --legacy-peer-deps
### Start Development Server
npm run dev
### Build for Production
npm run build

## 📁 Project Purpose

This project solves a real problem faced by small 245D agencies:

✔ Tracking onboarding steps is overwhelming
✔ Paper lists get lost
✔ Training deadlines get missed
✔ Admins need visibility
✔ Employees need clarity and guidance
✔ Compliance requires accurate documentation

The app becomes a centralized onboarding control center.

### 📚 References
- 🔗 [Next.js](https://nextjs.org/)
- 🔗 [React](https://react.dev/)
- 🔗 [TypeScript](https://www.typescriptlang.org/)
- 🔗 [TailwindCSS](https://tailwindcss.com/)
- 🔗 [ShadCN/ui](https://ui.shadcn.com/)
- 🔗 [Sentry](https://bit.ly/sentry-docs-dg)
- 🔗 [Kinde Auth](https://kinde.com/dgray-nextjsstack/)
- 🔗 [Neon Postgres](https://fyi.neon.tech/davegray)
- 🔗 [Drizzle ORM](https://orm.drizzle.team/)
- 🔗 [react-hook-form](https://react-hook-form.com/)
- 🔗 [Zod](https://zod.dev/)
- 🔗 [next-safe-action](https://next-safe-action.dev/)
- 🔗 [TanStack Table](https://tanstack.com/table/latest)
- 🔗 [Vercel](https://vercel.com/home)
