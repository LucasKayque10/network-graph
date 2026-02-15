<?php

namespace LucasBarros\Network\Contracts;

use LucasBarros\Network\Support\GraphData;

interface HasNetworkGraph
{
    public function getGraphData(): GraphData;

    public function getNodes(): array;

    public function getEdges(): array;

    public function getOptions(): array;
}
