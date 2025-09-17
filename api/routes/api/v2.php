<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V2\TaskController;
use App\Http\Controllers\Api\V2\CompleteTaskController;

Route::middleware(['auth:sanctum'])->prefix('v2')->as('v2.')->group(function () {
    Route::apiResource('tasks', TaskController::class)->names('tasks');
    Route::patch('tasks/{task}/complete', CompleteTaskController::class)->name('tasks.complete');
});
