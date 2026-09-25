// cube
const cube = {
  positions: new Float32Array([
    -1, -1, -1,  // 0
    1, -1, -1,  // 1
    1,  1, -1,  // 2
    -1,  1, -1,  // 3
    -1, -1,  1,  // 4
    1, -1,  1,  // 5
    1,  1,  1,  // 6
    -1,  1,  1   // 7
  ]),

  colors: new Float32Array([
    1,0,0,  0,1,0,  0,0,1, 1,1,0, 1,0,1, 0,1,1, 1,1,0, 1,0,1
  ]),

   indices: new Uint16Array([
    // Front
    4, 5, 6,   4, 6, 7,
    // Back
    1, 0, 3,   1, 3, 2,
    // Top
    3, 7, 6,   3, 6, 2,
    // Bottom
    0, 1, 5,   0, 5, 4,
    // Right
    1, 2, 6,   1, 6, 5,
    // Left
    0, 4, 7,   0, 7, 3,
  ])
}

const triangularPrism = {
  positions: new Float32Array([
    // front triangle
    -1, -1,  1,   // 0
     1, -1,  1,   // 1
     0,  1,  1,   // 2

    // back triangle
    -1, -1, -1,   // 3
     1, -1, -1,   // 4
     0,  1, -1    // 5
  ]),

  colors: new Float32Array([
    1,0,0,  0,1,0,  0,0,1, 1,1,0, 1,0,1, 0,1,1,
  ]),

  indices: new Uint16Array([
    // front
    0, 1, 2,

    // back
    3, 5, 4,

    // bottom
    0, 3, 4,
    0, 4, 1,

    // right
    1, 4, 5,
    1, 5, 2,

    // left
    0, 2, 5,
    0, 5, 3
  ])
}

const pyramid = {
  positions: new Float32Array([
    -1, -1,  1,  // 0 front-left
     1, -1,  1,  // 1 front-right
     1, -1, -1,  // 2 back-right
    -1, -1, -1,  // 3 back-left
     0,  1,  0   // 4 top
  ]),

  colors: new Float32Array([
    1,0,0,
    0,1,0,
    0,0,1,
    1,1,0,
    1,0,1
  ]),

  indices: new Uint16Array([
    // base
    0, 2, 1,
    0, 3, 2,

    // front
    0, 1, 4,

    // right
    1, 2, 4,

    // back
    2, 3, 4,

    // left
    3, 0, 4
  ])
};
