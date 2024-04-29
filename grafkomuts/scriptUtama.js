function main() {
    var CANVAS = document.getElementById("myCanvas");


    CANVAS.width = window.innerWidth;
    CANVAS.height = window.innerHeight;

    function normalizeX(x) {
        return ((x / CANVAS.width) * 2) - 1;
    }
    function normalizeY(y) {
        return -1 * (((y / CANVAS.height) * 2) - 1);
    }

    function detect(e) {
        console.log("X : " + e.pageX + ", Y: " + e.pageY);
    }


    var drag = false;
    var dX = 0;
    var dY = 0;


    var X_prev = 0;
    var Y_prev = 0;


    var scaleXMinion = 1;
    var scaleYMinion = 1;
    var scaleZMinion = 0;
    var rotateXMinion = 0;
    var rotateYMinion = 0;
    var rotateZMinion = 0;
    var translateXMinion = 0;
    var translateYMinion = 0;
    var translateZMinion = 0;

    var scaleXGru = 1;
    var scaleYGru = 1;
    var scaleZGru = 1;
    var rotateXGru = 0;
    var rotateYGru = 0;
    var rotateZGru = 0;
    var translateXGru = 0;
    var translateYGru = 0;
    var translateZGru = 0;

    var scaleXGirl = 1;
    var scaleYGirl = 1;
    var scaleZGirl = 1;
    var rotateXGirl = 0;
    var rotateYGirl = 0;
    var rotateZGirl = 0;
    var translateXGirl = 0;
    var translateYGirl = 0;
    var translateZGirl = 0;

    var FRICTION = 0.02;

    var keys = {};

    var handleKeyDown = function (e) {
        keys[e.key] = true;
    };

    var handleKeyUp = function (e) {
        keys[e.key] = false;
    };

    var handleKeys = function () {
        if (keys["a"]) {
            rotateXGirl += 0.05;
        }
        if (keys["s"]) {
            rotateXGirl -= 0.05;
        }
        if (keys["f"]) {
            rotateYGirl += 0.05;
        }
        if (keys["d"]) {
            rotateYGirl -= 0.05;
        }
        if (keys["g"]) {
            rotateZGirl += 0.05;
        }
        if (keys["h"]) {
            rotateZGirl -= 0.05;
        }
        if (keys["j"]) {
            translateXGirl += 0.05;
        }
        if (keys["k"]) {
            translateXGirl -= 0.05;
        }
        if (keys["l"]) {
            translateYGirl += 0.05;
        }
        if (keys[";"]) {
            translateYGirl -= 0.05;
        }
        if (keys["z"]) {
            translateZGirl += 0.05;
        }
        if (keys["x"]) {
            translateZGirl -= 0.05;
        }
        if (keys["c"]) {
            scaleXGirl += 0.01;
            scaleYGirl += 0.01;
            scaleZGirl += 0.01;
        }
        if (keys["v"]) {
            scaleXGirl -= 0.01;
            scaleYGirl -= 0.01;
            scaleZGirl -= 0.01;
        }
        if (keys["1"]) {
            rotateXMinion += 0.05;
        }
        if (keys["2"]) {
            rotateXMinion -= 0.05;
        }
        if (keys["3"]) {
            rotateYMinion += 0.05;
        }
        if (keys["4"]) {
            rotateYMinion -= 0.05;
        }
        if (keys["5"]) {
            rotateZMinion += 0.05;
        }
        if (keys["6"]) {
            rotateZMinion -= 0.05;
        }
        if (keys["7"]) {
            translateXMinion += 0.05;
        }
        if (keys["8"]) {
            translateXMinion -= 0.05;
        }
        if (keys["9"]) {
            translateYMinion += 0.05;
        }
        if (keys["0"]) {
            translateYMinion -= 0.05;
        }
        if (keys["-"]) {
            translateZMinion += 0.05;
        }
        if (keys["="]) {
            translateZMinion -= 0.05;
        }
        if (keys["*"]) {
            scaleXMinion += 0.01;
            scaleYMinion += 0.01;
            scaleZMinion += 0.01;
        }
        if (keys["+"]) {
            scaleXMinion -= 0.01;
            scaleYMinion -= 0.01;
            scaleZMinion -= 0.01;
        }
        if (keys["q"]) {
            rotateXGru += 0.05;
        }
        if (keys["w"]) {
            rotateXGru -= 0.05;
        }
        if (keys["e"]) {
            rotateYGru += 0.05;
        }
        if (keys["r"]) {
            rotateYGru -= 0.05;
        }
        if (keys["t"]) {
            rotateZGru += 0.05;
        }
        if (keys["y"]) {
            rotateZGru -= 0.05;
        }
        if (keys["u"]) {
            translateXGru += 0.05;
        }
        if (keys["i"]) {
            translateXGru -= 0.05;
        }
        if (keys["o"]) {
            translateYGru += 0.05;
        }
        if (keys["p"]) {
            translateYGru -= 0.05;
        }
        if (keys["["]) {
            translateZGru += 0.05;
        }
        if (keys["]"]) {
            translateZGru -= 0.05;
        }
        if (keys['ArrowUp']) {
            scaleXGru += 0.01;
            scaleYGru += 0.01;
            scaleZGru += 0.01;
        }
        if (keys["ArrowDown"]) {
            scaleXGru -= 0.01;
            scaleYGru -= 0.01;
            scaleZGru -= 0.01;
        }
    };

    document.addEventListener("keydown", handleKeyDown, false);
    document.addEventListener("keyup", handleKeyUp, false);


    var mouseDown = function (e) {
        drag = true;
        X_prev = e.pageX;
        Y_prev = e.pageY;
    }


    var mouseUp = function (e) {
        drag = false;
    }

    // var shader_vertex = compile_shader(shader_vertex_source, GL.VERTEX_SHADER, "VERTEX");
    // var shader_fragment = compile_shader(shader_fragment_source, GL.FRAGMENT_SHADER, "FRAGMENT");

    // var SHADER_PROGRAM = GL.createProgram();
    // GL.attachShader(SHADER_PROGRAM, shader_vertex);
    // GL.attachShader(SHADER_PROGRAM, shader_fragment);



    // GL.linkProgram(SHADER_PROGRAM);


    // var _color = GL.getAttribLocation(SHADER_PROGRAM, "color");
    // var _position = GL.getAttribLocation(SHADER_PROGRAM, "position");


    // //uniform
    // var _PMatrix = GL.getUniformLocation(SHADER_PROGRAM, "PMatrix"); //projection
    // var _VMatrix = GL.getUniformLocation(SHADER_PROGRAM, "VMatrix"); //View
    // var _MMatrix = GL.getUniformLocation(SHADER_PROGRAM, "MMatrix"); //Model


    // GL.enableVertexAttribArray(_color);
    // GL.enableVertexAttribArray(_position);

    // GL.useProgram(SHADER_PROGRAM);



    try {
        GL = CANVAS.getContext("webgl", { antialias: true });
    } catch (e) {
        alert("WebGL context cannot be initialized");
        return false;
    }
    //shaders
    var shader_vertex_source = `
      attribute vec3 position;
      attribute vec3 color;


      uniform mat4 PMatrix;
      uniform mat4 VMatrix;
      uniform mat4 MMatrix;
     
      varying vec3 vColor;
      void main(void) {
      gl_Position = PMatrix*VMatrix*MMatrix*vec4(position, 1.);
      vColor = color;


      gl_PointSize=60.0;
      }`;
    var shader_fragment_source = `
      precision mediump float;
      varying vec3 vColor;
      // uniform vec3 color;


      uniform float greyScality;


      void main(void) {
      float greyScaleValue = (vColor.r + vColor.g + vColor.b)/3.;
      vec3 greyScaleColor = vec3(greyScaleValue, greyScaleValue, greyScaleValue);
      vec3 color = mix(greyScaleColor, vColor, greyScality);
      gl_FragColor = vec4(color, 1.);
      }`;

    //matrix
    var PROJECTION_MATRIX = LIBS.get_projection(40, CANVAS.width / CANVAS.height, 1, 100);
    var VIEW_MATRIX = LIBS.get_I4();


    LIBS.translateZ(VIEW_MATRIX, -55);

    //-----------------------------------------------------minion-----------------------------------------

    var bodiminion = new MyObject(CylinderVertical(0, -5, 0, 4, 4, 6, 1, 1, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    bodiminion.setup();

    var kepalaminion = new MyObject(sphere(0, 1, 0, 4, 4, 4, 64, 64, 1, 1, 0).vertex, sphere(0, 1, 0, 1, 1, 1, 64, 64, 1, 1, 0).indices, shader_vertex_source, shader_fragment_source);
    kepalaminion.setup();

    var sabukkacamata = new MyObject(CylinderVertical(0, 0, 0, 4.1, 4.1, 1, 0.3, 0.3, 0.2), Cylindices(), shader_vertex_source, shader_fragment_source);
    sabukkacamata.setup();

    var kacamata = new MyObject(cylinderSpace(0, 0.5, 4, 2.8, 2.8, 0.5, 0.4, 0.4, 0.4), Cylindices(), shader_vertex_source, shader_fragment_source);
    kacamata.setup();

    var mata = new MyObject(cylinderSpace(0, 0.5, 4, 2.3, 2.1, 0.5, 1, 1, 1), Cylindices(), shader_vertex_source, shader_fragment_source);
    mata.setup();

    var pupil = new MyObject(cylinderSpace(0, 0.5, 4, 1, 1, 1, 0, 0, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    pupil.setup();

    var baju = new MyObject(CylinderVertical(0, -6, 0, 3.9, 4.1, 3, 0.2, 0.2, 0.8), Cylindices(), shader_vertex_source, shader_fragment_source);
    baju.setup();

    var lenganbaju = new MyObject(CylinderVertical(0, -3.5, 0, 4.1, 4.1, 1, 0.2, 0.2, 0.8), Cylindices(), shader_vertex_source, shader_fragment_source);
    lenganbaju.setup();

    var celana = new MyObject(sphere(0, -5.55, 0, 4, 2, 4, 64, 64, 0.2, 0.2, 0.8).vertex, sphere(0, 1, 0, 1, 1, 1, 64, 64, 1, 1, 0).indices, shader_vertex_source, shader_fragment_source);
    celana.setup();

    var kakikanan = new MyObject(CylinderVertical(1.5, -8.5, 0, 1, 1, 2, 0.2, 0.2, 0.8), Cylindices(), shader_vertex_source, shader_fragment_source);
    kakikanan.setup();
    
    var kakikiri = new MyObject(CylinderVertical(-1.5, -8.5, 0, 1, 1, 2, 0.2, 0.2, 0.8), Cylindices(), shader_vertex_source, shader_fragment_source);
    kakikiri.setup();

    var sepatukanan = new MyObject(createRectangularCuboid(0.5, -9.5, 0.5, 2, 1, 1, 0.2, 0.2, 0.2), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    sepatukanan.setup();

    var sepatukiri = new MyObject(createRectangularCuboid(-2.5, -9.5, 0.5, 2, 1, 1, 0.2, 0.2, 0.2), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    sepatukiri.setup();

    var tangankanan = new MyObject(CylinderHoriz(4, -4.25, 0, 0.5, 0.5, 3, 1, 1, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    tangankanan.setup();

    var tangankiri = new MyObject(CylinderHoriz(-7, -4.25, 0, 0.5, 0.5, 3, 1, 1, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    tangankiri.setup();

    var cpHairAKiri = [-0.3,4,2, 0.2,0.2,0.2,
        -1.5,6,2, 0.25,0.25,0.25,
        -3.5,2,2, 0.2,0.2,0.2];
    var hairAKiri = new MyObject(generateBSplineControlPoints(cpHairAKiri,0.1).vertices,generateBSplineControlPoints(cpHairAKiri,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairAKiri.setup();
    var cpHairAKanan = [0.3,4,2, 0.2,0.2,0.2,
        1.5,6,2, 0.25,0.25,0.25,
        3.5,2,2, 0.2,0.2,0.2];
    var hairAKanan = new MyObject(generateBSplineControlPoints(cpHairAKanan,0.1).vertices,generateBSplineControlPoints(cpHairAKanan,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairAKanan.setup();

    var cpHairBKiri = [-0.3,4.5,1, 0.2,0.2,0.2,
        -1.5,6.5,1, 0.25,0.25,0.25,
        -3.5,2.5,1, 0.2,0.2,0.2];
    var hairBKiri = new MyObject(generateBSplineControlPoints(cpHairBKiri,0.1).vertices,generateBSplineControlPoints(cpHairBKiri,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairBKiri.setup();
    var cpHairBKanan = [0.3,4.25,1, 0.2,0.2,0.2,
        1.5,6.25,1, 0.25,0.25,0.25,
        3.5,2.25,1, 0.2,0.2,0.2];
    var hairBKanan = new MyObject(generateBSplineControlPoints(cpHairBKanan,0.1).vertices,generateBSplineControlPoints(cpHairBKanan,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairBKanan.setup();

    var cpHairCKiri = [-0.3,5,0, 0.2,0.2,0.2,
        -1.5,7,0, 0.25,0.25,0.25,
        -3.5,3,0, 0.2,0.2,0.2];
    var hairCKiri = new MyObject(generateBSplineControlPoints(cpHairCKiri,0.1).vertices,generateBSplineControlPoints(cpHairCKiri,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairCKiri.setup();
    var cpHairCKanan = [0.3,5,0, 0.2,0.2,0.2,
        1.5,7,0, 0.25,0.25,0.25,
        3.5,3,0, 0.2,0.2,0.2];
    var hairCKanan = new MyObject(generateBSplineControlPoints(cpHairCKanan,0.1).vertices,generateBSplineControlPoints(cpHairCKanan,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairCKanan.setup();

    var cpHairDKiri = [-0.3,4.5,-1, 0.2,0.2,0.2,
        -1.5,6.5,-1, 0.25,0.25,0.25,
        -3.5,2.5,-1, 0.2,0.2,0.2];
    var hairDKiri = new MyObject(generateBSplineControlPoints(cpHairDKiri,0.1).vertices,generateBSplineControlPoints(cpHairDKiri,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairDKiri.setup();
    var cpHairDKanan = [0.3,4.5,-1, 0.2,0.2,0.2,
        1.5,6.5,-1, 0.25,0.25,0.25,
        3.5,2.5,-1, 0.2,0.2,0.2];
    var hairDKanan = new MyObject(generateBSplineControlPoints(cpHairDKanan,0.1).vertices,generateBSplineControlPoints(cpHairDKanan,0.1).indices,shader_vertex_source,shader_fragment_source);
    hairDKanan.setup();

    var logominion = new MyObject(createRectangularCuboid(-0.5,-5,4,1,1,1,0.1,0.1,0.5),getRectangularIndices(),shader_vertex_source,shader_fragment_source);
    logominion.setup();
    
    var sarungkanan = new MyObject(createRectangularCuboid(7,-5,0,1.5,1.5,1.5,0.2,0.2,0.2),getRectangularIndices(),shader_vertex_source,shader_fragment_source);
    sarungkanan.setup();
    
    var sarungkiri = new MyObject(createRectangularCuboid(-8.5,-5,0,1.5,1.5,1.5,0.2,0.2,0.2),getRectangularIndices(),shader_vertex_source,shader_fragment_source);
    sarungkiri.setup();



    bodiminion.child.push(kepalaminion);
    bodiminion.child.push(baju);
    bodiminion.child.push(tangankanan);
    bodiminion.child.push(tangankiri);
    bodiminion.child.push(lenganbaju);
    bodiminion.child.push(celana);
    bodiminion.child.push(kakikanan);
    bodiminion.child.push(kakikiri);
    bodiminion.child.push(sepatukanan);
    bodiminion.child.push(sepatukiri);
    bodiminion.child.push(kacamata);
    bodiminion.child.push(sabukkacamata);
    bodiminion.child.push(mata);
    bodiminion.child.push(pupil);
    bodiminion.child.push(hairAKiri);
    bodiminion.child.push(hairAKanan);
    bodiminion.child.push(hairBKiri);
    bodiminion.child.push(hairBKanan);
    bodiminion.child.push(hairCKiri);
    bodiminion.child.push(hairCKanan);
    bodiminion.child.push(hairDKanan);
    bodiminion.child.push(hairDKiri);
    bodiminion.child.push(logominion);
    bodiminion.child.push(sarungkanan);
    bodiminion.child.push(sarungkiri);

    //----------------------------------------------MINI GRUUUUUUUUUUUUUUUUUU------------------------------------------

    var gru = new MyObject(sphere(0, 0, 0, 5, 3, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    gru.setup();
    var badan = new MyObject(createAdjustedVerticalEllipticalCylinder(0, -1, 0, 7, 1.2, 5, 1.2, -9, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    badan.setup();
    var kaki_kiri = new MyObject(createAdjustedVerticalEllipticalCylinder(-1.5, -10, 0, 1, 1, 0.6, 0.6, -4, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    kaki_kiri.setup();
    var kaki_kanan = new MyObject(createAdjustedVerticalEllipticalCylinder(1.5, -10, 0, 1, 1, 0.6, 0.6, -4, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    kaki_kanan.setup();
    var hidung = new MyObject(ElipticParaboloid(0.3, 16, 16, 0, 0.3, 4, 0.8941176470588236, 0.5725490196078431, 0.5568627450980392).vertices, ElipticParaboloid(1, 16, 16, 5, 0, 0, 1, 0, 0).indices, shader_vertex_source, shader_fragment_source);
    hidung.setup();
    var sepatu_kiri = new MyObject(createAdjustedVerticalEllipticalCylinder(-1.5, -14, 0, 1, 1, 1, 1, -1, 0, 0, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    sepatu_kiri.setup();
    var sepatu_kanan = new MyObject(createAdjustedVerticalEllipticalCylinder(1.5, -14, 0, 1, 1, 1, 1, -1, 0, 0, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    sepatu_kanan.setup();
    var mata_putih_kiri = new MyObject(sphere(-2, 1, 1.5, 0.7, 0.8, 0.8, 100, 100, 1, 1, 1).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_putih_kiri.setup();
    var mata_putih_kanan = new MyObject(sphere(2, 1, 1.5, 0.7, 0.8, 0.8, 100, 100, 1, 1, 1).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_putih_kanan.setup();

    var mata_hitam_kiri = new MyObject(sphere(-2, 0.9, 2, 0.5, 0.6, 0.4, 100, 100, 0, 0, 0).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_hitam_kiri.setup();
    var mata_hitam_kanan = new MyObject(sphere(2, 0.9, 2, 0.5, 0.6, 0.4, 100, 100, 0, 0, 0).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_hitam_kanan.setup();

    var mata_putih_kiri_kecil_1 = new MyObject(sphere(-1.8, 0.8, 2.4, 0.15, 0.15, 0.15, 100, 100, 1, 1, 1).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_putih_kiri_kecil_1.setup();
    var mata_putih_kiri_kecil_2 = new MyObject(sphere(-2, 1, 2.4, 0.1, 0.1, 0.1, 100, 100, 1, 1, 11).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_putih_kiri_kecil_2.setup();

    var mata_putih_kanan_kecil_1 = new MyObject(sphere(1.8, 0.8, 2.4, 0.15, 0.15, 0.15, 100, 100, 1, 1, 1).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_putih_kanan_kecil_1.setup();
    var mata_putih_kanan_kecil_2 = new MyObject(sphere(2, 1, 2.4, 0.1, 0.1, 0.1, 100, 100, 1, 1, 11).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    mata_putih_kanan_kecil_2.setup();

    koordinat_senyum = [
        -2, -0.5, 1.8, 0, 0, 0,
        -1, -2.5, 1.8, 0, 0, 0,
        2, -1.5, 1.7, 0, 0, 0
    ];
    var senyum = new MyObject(generateBSplineControlPoints(koordinat_senyum, 0.1).vertices, generateBSplineControlPoints(koordinat_senyum, 0.1).indices, shader_vertex_source, shader_fragment_source);
    senyum.setup();

    koordinat_lesung = [
        -2.2, -0.6, 1.9, 0, 0, 0,
        -1.9, -0.3, 1.9, 0, 0, 0,
        -1.4, -0.6, 1.9, 0, 0, 0, 
    ];
    var lesung = new MyObject(generateBSplineControlPoints(koordinat_lesung, 0.1).vertices, generateBSplineControlPoints(koordinat_lesung, 0.1).indices, shader_vertex_source, shader_fragment_source);
    lesung.setup();

    var lengan_kiri = new MyObject(CylinderVertical(-6.5, -0.99, 0, 0.6, 0.6, -7, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    lengan_kiri.setup();
    var tangan_kiri = new MyObject(CylinderHoriz(-7, -8, 0, 0.6, 0.6, 3, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    tangan_kiri.setup();


    var lengan_kanan = new MyObject(CylinderVertical(6.5, -0.99, 0, 0.6, 0.6, -7, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    lengan_kanan.setup();
    var tangan_kanan = new MyObject(CylinderHoriz(7, -8, 0, 0.6, 0.6, -3, 0.17254901960784313, 0.21568627450980393, 0.23529411764705882), Cylindices(), shader_vertex_source, shader_fragment_source);
    tangan_kanan.setup();
    
    var syal = new MyObject(createAdjustedVerticalEllipticalCylinder(0, -4, 0, 4, 1.2, 7, 1.4, 3, 0.7137254901960784, 0.7176470588235294, 0.7333333333333333), Cylindices(), shader_vertex_source, shader_fragment_source);
    syal.setup();
    var leftSyal = new MyObject(createRectangularCuboid(-5.2, -1, 1, 3, 1, -7, 0.7137254901960784, 0.7176470588235294, 0.7333333333333333), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    leftSyal.setup();
    var rightSyal = new MyObject(createRectangularCuboid(2.2, -1, 1, 3, 1, -4, 0.7137254901960784, 0.7176470588235294, 0.7333333333333333), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    rightSyal.setup();

    


    gru.child.push(badan);
    gru.child.push(kaki_kiri);
    gru.child.push(kaki_kanan);
    gru.child.push(hidung);
    gru.child.push(sepatu_kiri);
    gru.child.push(sepatu_kanan);
    gru.child.push(mata_putih_kiri);
    gru.child.push(mata_putih_kanan);
    gru.child.push(mata_hitam_kiri);
    gru.child.push(mata_hitam_kanan);
    gru.child.push(mata_putih_kiri_kecil_1);
    gru.child.push(mata_putih_kiri_kecil_2);
    gru.child.push(mata_putih_kanan_kecil_1);
    gru.child.push(mata_putih_kanan_kecil_2);
    gru.child.push(senyum);
    gru.child.push(lesung);
    gru.child.push(lengan_kiri);
    gru.child.push(lengan_kanan);
    gru.child.push(tangan_kiri);
    gru.child.push(tangan_kanan);
    gru.child.push(syal);
    gru.child.push(leftSyal);
    gru.child.push(rightSyal);


    //----------------------------------------------Girl------------------------------------------

    var girlHead = new MyObject(sphere(0, 0, 0, 5 * 0.8 , 3 *0.8, 2 *0.8, 100, 100, 0.922, 0.765, 0.565).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    girlHead.setup();
    
    var girlRambut = new MyObject(sphere(0, 0.1, -0.2, 5 * 0.8, 3.2 * 0.8, 2 * 0.8, 100, 100, 0.478, 0.337, 0.22).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    girlRambut.setup();
    girlHead.child.push(girlRambut);
    
    var girlRambutKuncir = new MyObject(sphere(0, -0.5, -2.4, 0.5 * 0.8, 0.5 * 0.8, 3 * 0.8, 100, 100, 0.478, 0.337, 0.22).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    girlRambutKuncir.setup();
    girlHead.child.push(girlRambutKuncir);

    var girlBadan = new MyObject(createAdjustedVerticalEllipticalCylinder(0, -2, 0, 2, 0.8, 2.5, 1.5, -4, 0.424, 0.337, 0.149), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlBadan.setup();
    girlHead.child.push(girlBadan);

    var girlRok = new MyObject(createAdjustedVerticalEllipticalCylinder(0, -5.5, 0, 2.5, 1.5, 3.3, 1.5, -1.5, 0.173, 0.2, 0.267), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlRok.setup();
    girlHead.child.push(girlRok);

    var girlKakiKiri = new MyObject(CylinderVertical(-0.9, -7, 0, 0.8, 0.8, -2, 0.922, 0.765, 0.565), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlKakiKiri.setup();
    girlHead.child.push(girlKakiKiri);

    var girlKakiKanan = new MyObject(CylinderVertical(0.9, -7, 0, 0.8, 0.8, -2, 0.922, 0.765, 0.565), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlKakiKanan.setup();
    girlHead.child.push(girlKakiKanan);

    var girlSepatuKanan = new MyObject(createRectangularCuboid(0.1, -10, 1.1,   1.6, 2, 1,    0, 0, 0), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    girlSepatuKanan.setup();
    girlHead.child.push(girlSepatuKanan);

    var girlSepatuKiri = new MyObject(createRectangularCuboid(-1.7, -10, 1.1,    1.6, 2, 1,    0, 0, 0), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    girlSepatuKiri.setup();
    girlHead.child.push(girlSepatuKiri);

    var girlKacamataKanan = new MyObject(createRectangularCuboid(0.35,  -0.5,  1.9,      1.6, 1.6, 1.6,      0, 0, 0), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    girlKacamataKanan.setup();
    girlHead.child.push(girlKacamataKanan);

    var girlKacamataKiri = new MyObject(createRectangularCuboid(-1.95,  -0.5,  1.9,      1.6, 1.6, 1.6,      0, 0, 0), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    girlKacamataKiri.setup();
    girlHead.child.push(girlKacamataKiri);


    var girlKacamataKananDalam = new MyObject(createRectangularCuboid(0.41, -0.4, 2, 1.6 * 0.8, 1.6 * 0.8, 1.6 * 0.8, 1, 1, 1), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    girlKacamataKananDalam.setup();
    girlHead.child.push(girlKacamataKananDalam);

    var girlKacamataKiriDalam = new MyObject(createRectangularCuboid(-1.88, -0.4, 2, 1.6 * 0.8, 1.6 * 0.8, 1.6 * 0.8, 1, 1, 1), getRectangularIndices(), shader_vertex_source, shader_fragment_source);
    girlKacamataKiriDalam.setup();
    girlHead.child.push(girlKacamataKiriDalam);

// appus
    // var girlHead = new MyObject(sphere(0, 0, 0, 5 * 0.8, 3 * 0.8, 2 * 0.8, 100, 100, 0.922, 0.765, 0.565).vertex, sphere(0, 0, 0, 2, 2, 2, 100, 100, 0.9568627450980393, 0.8, 0.6745098039215687).indices, shader_vertex_source, shader_fragment_source);
    // girlHead.setup();

    var girlBatangKacamata = new MyObject(CylinderVertical(0, 0, 0.9, 5.1 * 0.79, 1 * 0.79, 0.7 * 0.8, -2, 0, 0, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlBatangKacamata.setup();
    girlHead.child.push(girlBatangKacamata);


    var girlMata = new MyObject(cylinderSpace(-1.265, 0.3, 2, 2.3 * 0.15, 2.1 * 0.15, 0.5 * 0.15, 0,0,0), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlMata.setup();
    girlHead.child.push(girlMata);

    var girlPupil = new MyObject(cylinderSpace(-1.265 +0.1, 0.3 +0.1, 2, 0.8 * 0.15, 0.8 * 0.15, 0.8 * 0.15, 1,1,1), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlPupil.setup();
    girlHead.child.push(girlPupil);

    var girlPupilKecil = new MyObject(cylinderSpace(-1.265 + 0.1 - 0.25, 0.3 + 0.1 - 0.25, 2, 0.8 * 0.1, 0.8 * 0.1, 0.8 * 0.1, 1, 1, 1), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlPupilKecil.setup();
    girlHead.child.push(girlPupilKecil);



    var girlMata1 = new MyObject(cylinderSpace(1.1, 0.3, 2, 2.3 * 0.15, 2.1 * 0.15, 0.5 * 0.15, 0, 0, 0), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlMata1.setup();
    girlHead.child.push(girlMata1);

    var girlPupil1 = new MyObject(cylinderSpace(1.1 + 0.1, 0.3 + 0.1, 2, 0.8 * 0.15, 0.8 * 0.15, 0.8 * 0.15, 1, 1, 1), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlPupil1.setup();
    girlHead.child.push(girlPupil1);

    var girlPupilKecil1 = new MyObject(cylinderSpace(1.1 + 0.1 - 0.25, 0.3 + 0.1 - 0.25, 2, 0.8 * 0.1, 0.8 * 0.1, 0.8 * 0.1, 1, 1, 1), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlPupilKecil1.setup();
    girlHead.child.push(girlPupilKecil1);

    koordinat_girlSenyum = [
        -1, -1, 1.5, 0, 0, 0,
        -0, -2, 1.5, 0, 0, 0,
        1, -1.5, 1.4, 0, 0, 0
    ];

    var girlSenyum = new MyObject(generateBSplineControlPoints(koordinat_girlSenyum, 0.1).vertices, generateBSplineControlPoints(koordinat_girlSenyum, 0.1).indices, shader_vertex_source, shader_fragment_source);
    girlSenyum.setup();
    girlHead.child.push(girlSenyum);


    var girlTangankanan = new MyObject(CylinderHoriz(2, -3.15, 0, 0.5, 0.3, 3, 0.424, 0.337, 0.149), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlTangankanan.setup();
    girlHead.child.push(girlTangankanan);

    var girlTangankiri = new MyObject(CylinderHoriz(-5, -3.15, 0, 0.5, 0.5, 3, 0.424, 0.337, 0.149), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlTangankiri.setup();
    girlHead.child.push(girlTangankiri);

    var girlTelapakkanan = new MyObject(CylinderHoriz(5, -3.15, 0, 0.6, 0.5, 0.5, 0.922, 0.765, 0.565), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlTelapakkanan.setup();
    girlHead.child.push(girlTelapakkanan);

    var girlTelapakKiri = new MyObject(CylinderHoriz(-5, -3.15, 0, 0.6, 0.5, 0.5, 0.922, 0.765, 0.565), Cylindices(), shader_vertex_source, shader_fragment_source);
    girlTelapakKiri.setup();
    girlHead.child.push(girlTelapakKiri);

    //ENVI
    var environment = new MyObject(sphere(-15, 10, 0, 6, 6, 6, 100, 100, 1, 1, 0).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    environment.setup();

    var awan_kiri_1 = new MyObject(sphere(15, 10, 0, 3, 1, 2, 100, 100, 1, 1, 1).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    awan_kiri_1.setup();
    environment.child.push(awan_kiri_1);

    var awan_kiri_2 = new MyObject(sphere(19, 10, 0, 3, 1, 2, 100, 100, 1, 1, 1).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    awan_kiri_2.setup();
    environment.child.push(awan_kiri_2);

    var awan_kiri_3 = new MyObject(sphere(17, 11, 0, 3, 1, 2, 100, 100, 1, 1, 1).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    awan_kiri_3.setup();
    environment.child.push(awan_kiri_3);

    var awan_kanan_1 = new MyObject(sphere(15-16, 10, 0, 3, 1, 2, 100, 100, 1, 1, 1).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    awan_kanan_1.setup();
    environment.child.push(awan_kanan_1);

    var awan_kanan_2 = new MyObject(sphere(19-16, 10, 0, 3, 1, 2, 100, 100, 1, 1, 1).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    awan_kanan_2.setup();
    environment.child.push(awan_kanan_2);

    var awan_kanan_3 = new MyObject(sphere(17-16,11, 0, 3, 1, 2, 100, 100, 1, 1, 1).vertex, sphere(0, -5, 4, 1, 1, 1, 100, 100, 1, 1, 1).indices, shader_vertex_source, shader_fragment_source);
    awan_kanan_3.setup();
    environment.child.push(awan_kanan_3);




    GL.clearColor(0, 0, 0.5, 0);


    GL.enable(GL.DEPTH_TEST);
    GL.depthFunc(GL.LEQUAL);

    var time_prev = 0;
    var animate = function (time) {
        GL.viewport(0, 0, CANVAS.width, CANVAS.height);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.D_BUFFER_BIT);
        var dt = time - time_prev;
        time_prev = time;
   
        MINION_MODEL_MATRIX = LIBS.get_I4();
        LIBS.translateX(MINION_MODEL_MATRIX, -10);
        LIBS.rotateX(MINION_MODEL_MATRIX, rotateXMinion);
        LIBS.rotateY(MINION_MODEL_MATRIX, rotateYMinion);
        LIBS.rotateZ(MINION_MODEL_MATRIX, rotateZMinion);
        LIBS.translateX(MINION_MODEL_MATRIX, translateXMinion - 20);
        LIBS.translateY(MINION_MODEL_MATRIX, translateYMinion);
        LIBS.translateZ(MINION_MODEL_MATRIX, translateZMinion);
        LIBS.scale(MINION_MODEL_MATRIX, Math.abs(scaleXMinion), Math.abs(scaleYMinion), Math.abs(scaleZMinion));

        bodiminion.MODEL_MATRIX = MINION_MODEL_MATRIX
        kepalaminion.MODEL_MATRIX = MINION_MODEL_MATRIX
        baju.MODEL_MATRIX = MINION_MODEL_MATRIX
        tangankanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        tangankiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        lenganbaju.MODEL_MATRIX = MINION_MODEL_MATRIX
        celana.MODEL_MATRIX = MINION_MODEL_MATRIX
        kakikanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        kakikiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        sepatukanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        sepatukiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        kacamata.MODEL_MATRIX = MINION_MODEL_MATRIX
        sabukkacamata.MODEL_MATRIX = MINION_MODEL_MATRIX
        mata.MODEL_MATRIX = MINION_MODEL_MATRIX
        pupil.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairAKiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairAKanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairBKiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairBKanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairCKiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairCKanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairDKiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        hairDKanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        logominion.MODEL_MATRIX = MINION_MODEL_MATRIX
        sarungkanan.MODEL_MATRIX = MINION_MODEL_MATRIX
        sarungkiri.MODEL_MATRIX = MINION_MODEL_MATRIX
        
        GRU_MM = LIBS.get_I4();
        LIBS.translateX(GRU_MM, 30);
        LIBS.translateY(GRU_MM, 5);
        
        LIBS.rotateX(GRU_MM, rotateXGru);
        LIBS.rotateY(GRU_MM, rotateYGru);
        LIBS.rotateZ(GRU_MM, rotateZGru);
        LIBS.translateX(GRU_MM, translateXGru);
        LIBS.translateY(GRU_MM, translateYGru);
        LIBS.translateZ(GRU_MM, translateZGru);
        LIBS.scale(GRU_MM, Math.abs(scaleXGru), Math.abs(scaleYGru), Math.abs(scaleZGru));

        gru.MODEL_MATRIX = GRU_MM;
        badan.MODEL_MATRIX = GRU_MM;
        kaki_kiri.MODEL_MATRIX = GRU_MM;
        kaki_kanan.MODEL_MATRIX = GRU_MM;
        hidung.MODEL_MATRIX = GRU_MM;
        sepatu_kiri.MODEL_MATRIX = GRU_MM;
        sepatu_kanan.MODEL_MATRIX = GRU_MM;
        mata_putih_kiri.MODEL_MATRIX = GRU_MM;
        mata_putih_kanan.MODEL_MATRIX = GRU_MM;
        mata_hitam_kiri.MODEL_MATRIX = GRU_MM;
        mata_hitam_kanan.MODEL_MATRIX = GRU_MM;
        mata_putih_kiri_kecil_1.MODEL_MATRIX = GRU_MM;
        mata_putih_kiri_kecil_2.MODEL_MATRIX = GRU_MM;
        mata_putih_kanan_kecil_1.MODEL_MATRIX = GRU_MM;
        mata_putih_kanan_kecil_2.MODEL_MATRIX = GRU_MM;
        senyum.MODEL_MATRIX = GRU_MM;
        lesung.MODEL_MATRIX = GRU_MM;
        lengan_kiri.MODEL_MATRIX = GRU_MM;
        tangan_kiri.MODEL_MATRIX = GRU_MM;
        lengan_kanan.MODEL_MATRIX = GRU_MM;
        tangan_kanan.MODEL_MATRIX = GRU_MM;
        syal.MODEL_MATRIX = GRU_MM;
        leftSyal.MODEL_MATRIX = GRU_MM;
        rightSyal.MODEL_MATRIX = GRU_MM;

        GIRL_MM = LIBS.get_I4();
        LIBS.rotateX(GIRL_MM, rotateXGirl);
        LIBS.rotateY(GIRL_MM, rotateYGirl);
        LIBS.rotateZ(GIRL_MM, rotateZGirl);
        LIBS.translateX(GIRL_MM, translateXGirl);
        LIBS.translateY(GIRL_MM, translateYGirl);
        LIBS.translateZ(GIRL_MM, translateZGirl);
        LIBS.scale(GIRL_MM, Math.abs(scaleXGirl), Math.abs(scaleYGirl), Math.abs(scaleZGirl));
        // LIBS.rotateY(GIRL_MM, -90);
        // LIBS.rotateY(GIRL_MM, -70);


        girlHead.MODEL_MATRIX =GIRL_MM;
        girlRambut.MODEL_MATRIX = GIRL_MM;
        girlRambutKuncir.MODEL_MATRIX = GIRL_MM;
        girlBadan.MODEL_MATRIX = GIRL_MM;
        girlRok.MODEL_MATRIX = GIRL_MM;
        girlKakiKiri.MODEL_MATRIX = GIRL_MM;
        girlKakiKanan.MODEL_MATRIX = GIRL_MM;
        girlSepatuKanan.MODEL_MATRIX = GIRL_MM;
        girlSepatuKiri.MODEL_MATRIX = GIRL_MM;
        girlKacamataKanan.MODEL_MATRIX = GIRL_MM;
        girlKacamataKiri.MODEL_MATRIX = GIRL_MM;
        girlKacamataKananDalam.MODEL_MATRIX = GIRL_MM;
        girlKacamataKiriDalam.MODEL_MATRIX = GIRL_MM;
        girlBatangKacamata.MODEL_MATRIX = GIRL_MM;
        girlMata.MODEL_MATRIX = GIRL_MM;
        girlMata1.MODEL_MATRIX = GIRL_MM;
        girlPupil.MODEL_MATRIX = GIRL_MM;
        girlPupil1.MODEL_MATRIX = GIRL_MM;
        girlPupilKecil.MODEL_MATRIX = GIRL_MM;
        girlPupilKecil1.MODEL_MATRIX = GIRL_MM;
        girlSenyum.MODEL_MATRIX = GIRL_MM;
        girlTangankiri.MODEL_MATRIX = GIRL_MM;
        girlTangankanan.MODEL_MATRIX = GIRL_MM;

        girlTelapakkanan.MODEL_MATRIX = GIRL_MM;
        girlTelapakKiri.MODEL_MATRIX = GIRL_MM;



        ENVI_MODEL = LIBS.get_I4();
        environment.MODEL_MATRIX = ENVI_MODEL;
        awan_kiri_1.MODEL_MATRIX = ENVI_MODEL;
        awan_kiri_2.MODEL_MATRIX = ENVI_MODEL;
        awan_kiri_3.MODEL_MATRIX = ENVI_MODEL;
        awan_kanan_1.MODEL_MATRIX = ENVI_MODEL;
        awan_kanan_2.MODEL_MATRIX = ENVI_MODEL;
        awan_kanan_3.MODEL_MATRIX = ENVI_MODEL;


        environment.render(VIEW_MATRIX, PROJECTION_MATRIX);
        bodiminion.render(VIEW_MATRIX, PROJECTION_MATRIX);
        gru.render(VIEW_MATRIX, PROJECTION_MATRIX);
        girlHead.render(VIEW_MATRIX, PROJECTION_MATRIX);
        handleKeys();

        window.requestAnimationFrame(animate);
    };
    animate(0);
}
window.addEventListener('load', main);