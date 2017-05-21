<?php

namespace App\Http\Controllers;

use App\City;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    public function test()
    {
        $cities = City::get()->where('Population', '>', 5000000);

        return response()->json($cities);
    }
}
