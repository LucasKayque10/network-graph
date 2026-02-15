<?php

namespace LucasBarros\Network;

use Illuminate\Support\ServiceProvider;
use Livewire\Livewire;
use LucasBarros\Network\Livewire\NetworkGraph;

class NetworkServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'network-graph');

        Livewire::component('network-graph', NetworkGraph::class);
    }
}
