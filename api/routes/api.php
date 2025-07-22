<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegisterController;


require_once __DIR__ . '/api/v1.php';
require_once __DIR__ . '/api/v2.php';

Route::prefix('auth')->group(function () {
    Route::post('/login', LoginController::class);
    Route::post('/logout', LogoutController::class)->middleware('auth:sanctum');
    Route::post('/register', RegisterController::class);
});

Route::middleware(['auth:sanctum'])->get('/v1/user', function (Request $request) {
    return $request->user();
});
