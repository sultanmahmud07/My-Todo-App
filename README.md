# 🚀 Todo App Dashboard — Next.js + Typescript

A clean and fast Todo Dashboard built with **Next.js App Router** and **Django REST API**, featuring secure authentication, drag‑and‑drop todo sorting, and a user profile system.

---

## ✨ Features (Short & Essential)

### 🔐 Authentication
- Login & signup using JWT stored in HTTP‑only cookies  
- Middleware route protection  
- Redirect rules:
  - `/` → `/dashboard`
  - Block authenticated users from `/login` & `/signup`  

### 📝 Todo Management
- Create todo  
- Update todo  
- Delete todo  
- **Drag & drop reorder with live position update**  
- Search & filter by date  
- Server‑side data fetching with `getTodos()`  
- Auto UI refresh using `router.refresh()` + `revalidateTag("todos")`

### 👤 Profile System
- Fetch logged‑in user info  
- Update:
  - First/Last name  
  - Address  
  - Contact number  
  - Bio  
  - Profile image  

### ⚙️ Technologies
- **Frontend:** Next.js 15, TypeScript, Tailwind, Server Actions  
- **Backend:** Django REST Framework, PostgreSQL  
- **Auth:** JWT cookies  
- **Other:** Middleware, URLSearchParams, Tag-based caching  

---

## 📁 Main Project Structure
```
src/
 ├─ app/
 │   ├─ dashboard/
 │   ├─ login/
 │   ├─ signup/
 │   ├─ middleware.ts
 │   └─ page.tsx
 ├─ services/
 │   ├─ auth/
 │   ├─ todos/
 │   └─ user/
 ├─ components/
 │   ├─ TodoList.tsx
 │   ├─ TodoItem.tsx
 │   └─ ProfileForm.tsx
```

---

## ▶️ Environment Variables
```
NEXT_PUBLIC_API_BASE_URL=https://todo-app.pioneeralpha.com 
```

---

## 📌 Run Project
```
npm install
npm run dev
```

---

## 🌟 Summary
A minimal but powerful Todo Dashboard with:
✔ Todo CRUD  
✔ Drag & drop reorder  
✔ Auth with cookies  
✔ Protected routes  
✔ Profile update system  

Perfect starter for real‑world dashboard applications.
