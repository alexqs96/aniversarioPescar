import { lazy } from 'react'

export const Home = lazy(() => import("./Home/Home"));
export const Games = lazy(() => import('./Games/Games'));
export const MemoTest = lazy(() => import('./Games/MemoTest/MemoTest'));
export const TriviaPescar = lazy(() => import('./Games/TriviaPescar/TriviaPescar'));
export const Students = lazy(() => import('./Students/Students'));
export const Entrepreneurs = lazy(() => import('./Entrepreneurs/Entrepreneurs'));
export const Testimonials = lazy(() => import('./Testimonials/Testimonials'));