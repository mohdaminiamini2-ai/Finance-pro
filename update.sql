-- Run in Supabase SQL Editor
create table if not exists budgets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  category text, amount numeric, period text default 'monthly',
  created_at timestamptz default now()
);

create table if not exists goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  name text, target numeric, saved numeric default 0, deadline date,
  created_at timestamptz default now()
);

alter table products add column if not exists image_url text;

alter table budgets enable row level security;
alter table goals enable row level security;
create policy "own budgets" on budgets for all using (auth.uid()=user_id);
create policy "own goals" on goals for all using (auth.uid()=user_id);
