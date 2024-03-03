<?php

use Illuminate\Http\Request;
use Mocking\Controllers\Controller;
use Illuminate\Support\Facades\Route;
// |--------------------------------------------------------------------------
// | API Routes
// |--------------------------------------------------------------------------
// |
// | Here is where you can register API routes for your application. These
// | routes are loaded by the RouteServiceProvider and all of them will
// | be assigned to the "api" middleware group. Make something great!
// |
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/getAllData', [Controller::class, 'getData']);
Route::post('/postData', [Controller::class, 'postData']);
Route::put('/putData', [Controller::class, 'putData']);
Route::patch('/patchData', [Controller::class, 'patchData']);
