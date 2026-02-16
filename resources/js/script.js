
function showNodePopup(title, html) {
    document.getElementById('node-popup-title').innerHTML = title;
    document.getElementById('node-popup-content').innerHTML = html;
    document.getElementById('node-popup').style.display = 'block';
}

function hideNodePopup() {
    document.getElementById('node-popup').style.display = 'none';
}

function networkGraph(nodes, edges, options) {
    return {
        instance: null,
        datasetNodes: null,
        clickTimer: null,
        isDragging: false,

        render() {
            if (this.instance) {
                this.instance.destroy();
            }

            this.datasetNodes = new vis.DataSet(nodes);
            const datasetEdges = new vis.DataSet(edges);

            this.instance = new vis.Network(
                this.$refs.canvas,
                {
                    nodes: this.datasetNodes,
                    edges: datasetEdges,
                },
                options
            );

            // Ajusta a rede à tela ao carregar
            this.instance.fit({ animation: true });

            // -------------------------
            // DRAG CONTROL
            // -------------------------

            this.instance.on("dragStart", () => {
                this.isDragging = true;
            });

            this.instance.on("dragEnd", () => {
                setTimeout(() => this.isDragging = false, 80);
            });

            // -----------------
            // CLICK (com delay)
            // -----------------
            this.instance.on("click", (params) => {
                if (this.isDragging) return;
                if (!params.nodes.length) return;

                clearTimeout(this.clickTimer);

                this.clickTimer = setTimeout(() => {
                    const node = this.datasetNodes.get(params.nodes[0]);

                    if (node?.popup_title && node?.popup_html) {
                        showNodePopup(node.popup_title, node.popup_html);
                    }

                }, 220); // janela para double click
            });

            // -----------------
            // DOUBLE CLICK
            // -----------------
            this.instance.on("doubleClick", (params) => {
                if (!params.nodes.length) return;

                clearTimeout(this.clickTimer);

                const node = this.datasetNodes.get(params.nodes[0]);

                if (!node?.route_url) return;

                if (node.route_new_tab) {
                    window.open(node.route_url, '_blank');
                } else {
                    window.location.href = node.route_url;
                }
            });
        },

        focus(id) {
            if (!this.instance) return;

            this.instance.focus(id, {
                scale: 2,
                animation: true,
            });

            this.instance.selectNodes([id]);
        }
    }
}