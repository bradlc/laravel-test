<?php

namespace App\Http\Controllers;

use App\City;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    public function test()
    {
        // return view('test');
        $cities = City::get()->where('population', '>', 5000000);

        return response()->json($cities);
    }
}
