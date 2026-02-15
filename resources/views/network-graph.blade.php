<div>
    <div
        wire:ignore
        class="bg-white"
        x-data="networkGraph(@js($nodes), @js($edges), @js($options))"
        x-init="render()"
        x-on:network-refresh.window="render()"
        x-on:network-focus.window="focus($event.detail.id)"
        style="height:70vh"
        x-ref="canvas">
    </div>

    {{-- POPUP --}}
    <div id="node-popup"
        style="display:none;
                position:fixed;
                inset:0;
                background:rgba(0,0,0,.4);
                z-index:9999;">

        <div style="
            background:white;
            max-width:700px;
            margin:5% auto;
            padding:20px;
            border-radius:10px;
            position:relative;
        ">
            <button onclick="hideNodePopup()"
                    style="position:absolute; top:8px; right:8px;">
                ✕
            </button>

            <div id="node-popup-content"></div>
        </div>
    </div>
</div>

@once

<script>{!! filament_network_asset('vis-network-min.js') !!}</script>
<script>{!! filament_network_asset('script.js') !!}</script>

@endonce