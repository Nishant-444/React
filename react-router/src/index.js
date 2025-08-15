import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/github";
import {
	Outlet,
	Link,
	NavLink,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	useParams,
} from "react-router-dom";
import { React, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

export {
	Header,
	Footer,
	Outlet,
	Home,
	About,
	Contact,
	User,
	Github,
	Link,
	NavLink,
	createRoot,
	React,
	StrictMode,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Layout,
	useState,
	useParams,
};
