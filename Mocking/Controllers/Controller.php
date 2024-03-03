<?php

namespace Mocking\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\File;

class Controller extends BaseController
{
    public function getData()
    {
        $path = base_path() . "/Mocking/Json/get_all_data.json";

        if (File::exists($path)) {
            $json = json_decode(file_get_contents($path), true);
            return response()->json($json);
        } else {
            return response()->json(['error' => 'Data not found'], 404);
        }
    }
}
