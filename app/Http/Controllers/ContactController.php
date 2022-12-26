<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function sendMessage(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email:dns,filter,rfc|max:50',
            'name' => 'required|string|max:255',
            'phone' => 'required|max:20',
            'message' => 'required|string|max:500',
        ]);

        ContactMessage::create($data);

        return back()->with('message', [
            'type' => 'success',
            'message' => 'Your Message Has Been Sent. I`ll Contact You Soon.'
        ]);
    }
}
