/// <reference types="@sveltejs/kit" />

type Todo = {
  created_at: Date;
  text: string;
  done: boolean;
}