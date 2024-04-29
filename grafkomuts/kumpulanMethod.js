function CylinderVertical(x_awal, y_awal, z_awal, radius_sumbu_x, radius_sumbu_z, height, r, g, b) {
    var vertices = [];
    vertices.push(x_awal);
    vertices.push(y_awal);
    vertices.push(z_awal);
    vertices.push(r);
    vertices.push(g);
    vertices.push(b);
    for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var x_baru = x_awal + Math.cos(angleInRadians) * radius_sumbu_x;
      var y_baru = y_awal;
      var z_baru = z_awal + Math.sin(angleInRadians) * radius_sumbu_z;
      vertices.push(x_baru);
      vertices.push(y_baru);
      vertices.push(z_baru);
      vertices.push(r);
      vertices.push(g);
      vertices.push(b);
    }
    vertices.push(x_awal);
    vertices.push(y_awal + height);
    vertices.push(z_awal);
    vertices.push(r);
    vertices.push(g);
    vertices.push(b);
    for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var x_baru = x_awal + Math.cos(angleInRadians) * radius_sumbu_x;
      var y_baru = y_awal + height;
      var z_baru = z_awal + Math.sin(angleInRadians) * radius_sumbu_z;
      vertices.push(x_baru);
      vertices.push(y_baru);
      vertices.push(z_baru);
      vertices.push(r);
      vertices.push(g);
      vertices.push(b);
    }
    return vertices;
  }
  function cylinderSpace(x_awal, y_awal, z_awal, radius_sumbu_x, radius_sumbu_y, height, r, g, b) {
    var vertices = [];
    vertices.push(x_awal);
    vertices.push(y_awal);
    vertices.push(z_awal);
    vertices.push(r);
    vertices.push(g);
    vertices.push(b);
    for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var x_baru = x_awal + Math.cos(angleInRadians) * radius_sumbu_x;
      var y_baru = y_awal + Math.sin(angleInRadians) * radius_sumbu_y ;
      var z_baru = z_awal ;
      vertices.push(x_baru);
      vertices.push(y_baru);
      vertices.push(z_baru);
      vertices.push(r);
      vertices.push(g);
      vertices.push(b);
    }
    vertices.push(x_awal);
    vertices.push(y_awal);
    vertices.push(z_awal + height);
    vertices.push(r);
    vertices.push(g);
    vertices.push(b);
    for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var x_baru = x_awal + Math.cos(angleInRadians) * radius_sumbu_x;
      var y_baru = y_awal + Math.sin(angleInRadians) * radius_sumbu_y;
      var z_baru = z_awal + height;
      vertices.push(x_baru);
      vertices.push(y_baru);
      vertices.push(z_baru);
      vertices.push(r);
      vertices.push(g);
      vertices.push(b);
    }
    return vertices;
  }
  function CylinderHoriz(x, y, z, radius_sumbu_y, radius_sumbu_z, height, r, g, b) {
    var vertices = [];
    vertices.push(x);
    vertices.push(y);
    vertices.push(z);
    vertices.push(r);
    vertices.push(g);
    vertices.push(b);
    for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var x_baru = x;
      var y_baru = y + Math.cos(angleInRadians) * radius_sumbu_y;
      var z_baru = z + Math.sin(angleInRadians) * radius_sumbu_z;
      vertices.push(x_baru);
      vertices.push(y_baru);
      vertices.push(z_baru);
      vertices.push(r);
      vertices.push(g);
      vertices.push(b);
    }
    vertices.push(x + height);
    vertices.push(y);
    vertices.push(z);
    vertices.push(r);
    vertices.push(g);
    vertices.push(b);
    for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var x_baru = x + height;
      var y_baru = y + Math.cos(angleInRadians) * radius_sumbu_y;
      var z_baru = z + Math.sin(angleInRadians) * radius_sumbu_z;
      vertices.push(x_baru);
      vertices.push(y_baru);
      vertices.push(z_baru);
      vertices.push(r);
      vertices.push(g);
      vertices.push(b);
    }
    return vertices;
  }
  function Cylindices() {
    var faces = [];
  
    for (let i = 0; i <= 360; i++) {
      faces.push(0);
      faces.push(i + 1);
      faces.push(i + 2);
    }
    for (let i = 362; i < 722; i++) {
      faces.push(362);
      faces.push(i + 1);
      faces.push(i + 2);
    }
    for (let i = 1; i <= 361; i++) {
      faces.push(i);
      faces.push(360 + i);
      faces.push(361 + i);
  
      faces.push(361 + i);
      faces.push(i);
      faces.push(i + 1);
    }
    return faces;
  }
  function sphere(x_awal, y_awal, z_awal, radius_x, radius_y, radius_z, latitudeBands, longitudeBands, r, g, b) {
    const vertex = [];
    const indices = [];
  
    for (let lat = 0; lat <= latitudeBands; lat++) {
      const theta = lat * Math.PI / latitudeBands;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
  
      for (let long = 0; long <= longitudeBands; long++) {
        const phi = long * 2 * Math.PI / longitudeBands;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
  
        const xPosition = x_awal + radius_x * cosPhi * sinTheta;
        const yPosition = y_awal + radius_y * sinPhi * sinTheta;
        const zPosition = z_awal + radius_z * cosTheta;
  
        vertex.push(xPosition, yPosition, zPosition, r, g, b);
      }
    }
  
    for (let lat = 0; lat < latitudeBands; lat++) {
      for (let long = 0; long < longitudeBands; long++) {
        const first = (lat * (longitudeBands + 1)) + long;
        const second = first + longitudeBands + 1;
  
        indices.push(first, second, first + 1);
        indices.push(second, second + 1, first + 1);
      }
    }
  
    return { vertex, indices };
  }
  
  function generateBSpline(controlPoint, m, degree){
    var curves = [];
    var knotVector = [];
  
    var n = controlPoint.length/6;
  
   
    // Calculate the knot values based on the degree and number of control points
    for (var i = 0; i < n + degree+1; i++) {
      if (i < degree + 1) {
        knotVector.push(0);
      } else if (i >= n) {
        knotVector.push(n - degree);
      } else {
        knotVector.push(i - degree);
      }
    }
  
  
  
    var basisFunc = function(i,j,t){
        if (j == 0){
          if(knotVector[i] <= t && t<(knotVector[(i+1)])){
            return 1;
          }else{
            return 0;
          }
        }
  
        var den1 = knotVector[i + j] - knotVector[i];
        var den2 = knotVector[i + j + 1] - knotVector[i + 1];
       
        var term1 = 0;
        var term2 = 0;
     
   
        if (den1 != 0 && !isNaN(den1)) {
          term1 = ((t - knotVector[i]) / den1) * basisFunc(i,j-1,t);
        }
     
        if (den2 != 0 && !isNaN(den2)) {
          term2 = ((knotVector[i + j + 1] - t) / den2) * basisFunc(i+1,j-1,t);
        }
     
        return term1 + term2;
    }
  
   
    for(var t=0;t<m;t++){
      var x=0;
      var y=0;
      var z=0;
      var r=0;
      var g=0;
      var b=0;
  
      var u = (t/m * (knotVector[controlPoint.length/6] - knotVector[degree]) ) + knotVector[degree] ;
  
      //C(t)
      for(var key =0;key<n;key++){
  
        var C = basisFunc(key,degree,u);
        x+=(controlPoint[key*6] * C);
        y+=(controlPoint[key*6+1] * C);
        z+=(controlPoint[key*6+2] * C);
        r+=(controlPoint[key*6+3] * C);
        g+=(controlPoint[key*6+4] * C);
        b+=(controlPoint[key*6+5] * C);
      }
      curves.push(x);
      curves.push(y);
      curves.push(z);
      curves.push(r);
      curves.push(g);
      curves.push(b);
     
    }
    return curves;
  }
  function generateBSplineControlPoints(controlPoints, radius) {
    var totalPoints = 100;
    var vertices = [];
    var indices = [];
    var points = generateBSpline(controlPoints, totalPoints, (controlPoints.length / 6) - 1);

    for (let i = 0; i < totalPoints * 2; i++) {
        for (let j = 0; j < 360; j++) {
            var angleInRadians = (j * Math.PI) / 180;
            var newX = points[i * 6] + Math.cos(angleInRadians) * radius;
            var newY = points[i * 6 + 1] + Math.sin(angleInRadians) * radius;
            var newZ = points[i * 6 + 2];
            var red = points[i * 6 + 3];
            var green = points[i * 6 + 4];
            var blue = points[i * 6 + 5];
            vertices.push(newX, newY, newZ, red, green, blue);
        }
    }

    for (let i = 0; i < totalPoints * 2; i++) {
        for (let j = 0; j < 360; j++) {
            indices.push(j + (i * 360));
            indices.push(j + 360 + (i * 360));
            indices.push(j + 361 + (i * 360));

            indices.push(j + (i * 360));
            indices.push(j + 1 + (i * 360));
            indices.push(j + 361 + (i * 360));
        }
    }

    return { vertices, indices };
}

  function createRectangularCuboid(x, y, z, width, length, height, red, green, blue) {
    var vertices = [];
  
    vertices.push(x, y, z, red, green, blue);
    vertices.push(x + width, y, z, red, green, blue);
    vertices.push(x + width, y + height, z, red, green, blue);
    vertices.push(x, y + height, z, red, green, blue);
    
    vertices.push(x, y, z - length, red, green, blue);
    vertices.push(x + width, y, z - length, red, green, blue);
    vertices.push(x + width, y + height, z - length, red, green, blue);
    vertices.push(x, y + height, z - length, red, green, blue);
  
    return vertices;
}

function getRectangularIndices() {
    var faces = [];
    
    faces.push(3, 2, 7);
    faces.push(2, 6, 7);
    
    faces.push(0, 1, 4);
    faces.push(1, 4, 5);
    
    faces.push(1, 2, 5);
    faces.push(2, 5, 6);
    
    faces.push(4, 5, 6);
    faces.push(4, 6, 7);
    
    faces.push(3, 0, 4);
    faces.push(0, 1, 2);
    
    faces.push(2, 0, 3);
    faces.push(3, 4, 7);
    
    return faces;
}

function createAdjustedVerticalEllipticalCylinder(startX, startY, startZ, radiusX1, radiusZ1, radiusX2, radiusZ2, height, red, green, blue) {
  var vertices = [];
  vertices.push(startX, startY, startZ, red, green, blue);
  for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var newX = startX + Math.cos(angleInRadians) * radiusX1;
      var newY = startY;
      var newZ = startZ + Math.sin(angleInRadians) * radiusZ1;
      vertices.push(newX, newY, newZ, red, green, blue);
  }
  vertices.push(startX, startY + height, startZ, red, green, blue);
  for (let i = 0; i <= 360; i++) {
      var angleInRadians = (i * Math.PI) / 180;
      var newX = startX + Math.cos(angleInRadians) * radiusX2;
      var newY = startY + height;
      var newZ = startZ + Math.sin(angleInRadians) * radiusZ2;
      vertices.push(newX, newY, newZ, red, green, blue);
  }
  return vertices;
}

  function ElipticParaboloid(radius, segments, capSegments, xoff, yoff, zoff,r,g,b) {
    const vertices = [];
    const indices = [];
  
    for (let i = 0; i <= segments; i++) {
      //v
      const lat = Math.PI * i / segments;
      const sinLat = Math.sin(lat);
      const cosLat = Math.cos(lat);
  
      for (let j = 0; j <= segments; j++) {
        //u
        const lng = 2 * Math.PI * j / segments;
        const sinLng = Math.sin(lng);
        const cosLng = Math.cos(lng);
        const tanLng = Math.tan(lng);
        const secLng = 1 / Math.cos(lng);
  
  
        const x = lat * cosLng;
        const y = lat * sinLng;
        const z = -(lat * lat);
  
        vertices.push(radius * x + xoff, radius * y + yoff, radius * z + zoff,r,g,b);
  
        if (i < segments && j < segments) {
          let first = i * (segments + 1) + j;
          let second = first + segments + 1;
  
          indices.push(first, second, first + 1);
          indices.push(second, second + 1, first + 1);
        }
      }
    } return {vertices, indices};
  }