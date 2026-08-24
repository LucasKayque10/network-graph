<?php

if (! function_exists('network_asset')) {
    function network_asset(string $file): string
    {
        return file_get_contents(__DIR__ . '/../resources/js/' . $file);
    }
}