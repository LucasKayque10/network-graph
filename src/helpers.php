<?php

if (! function_exists('filament_network_asset')) {
    function filament_network_asset(string $file): string
    {
        return file_get_contents(__DIR__ . '/../resources/js/' . $file);
    }
}