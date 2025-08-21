<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/', function () {
    return view('welcome');
});

//Test comments to rigger Workflow

Route::prefix('auth')->group(function () {
    Route::post('/register', RegisterController::class)->middleware('guest');
    Route::post('/login', LoginController::class)->middleware('guest');
    Route::post('/logout', LogoutController::class)->middleware('auth:sanctum');
});
