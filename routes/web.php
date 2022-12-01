<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/about_me', function() {
    return Inertia::render('About');
})->name('about_me');

Route::get('/what_i_do', function() {
    return Inertia::render('Jobs');
})->name('what_i_do');

Route::get('/projects', function() {
    return Inertia::render('Projects');
})->name('projects');

Route::get('/testimonials', function() {
    return Inertia::render('Testimonials');
})->name('testimonials');

Route::get('/contact_me', function() {
    return Inertia::render('Contact');
})->name('contact_me');


Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
