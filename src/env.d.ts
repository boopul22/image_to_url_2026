/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      googleId: string;
      name: string;
      email: string;
      avatarUrl: string;
    };
  }
}
