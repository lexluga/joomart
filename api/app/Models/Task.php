<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;

    protected $fillable = ['name'];


    public function user()
    {
        // Define the relationship with the User model
        // Assuming a Task belongs to a User
        return $this->belongsTo(User::class);
    }

}
