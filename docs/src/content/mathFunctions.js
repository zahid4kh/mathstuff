export const mathFunctions = {
    "Basic Arithmetic": [
        {
            name: "mean",
            description: "Calculate the mean of a list of numbers",
            parameters: [{name: "numbers", type: "List<Float>", description: "List of numbers"}],
            returnType: "Float",
            example: "val mean = mean(listOf(1f, 2f, 3f)) // Returns 2f",
        },
        {
            name: "median",
            description: "Calculate the median of a list of numbers",
            parameters: [{name: "numbers", type: "List<Float>", description: "List of numbers"}],
            returnType: "Float",
            example: "val median = median(listOf(1f, 2f, 3f)) // Returns 2f"
        },
        {
            name: "mode",
            description: "Calculate the mode of a list of numbers",
            parameters: [{name: "numbers", type: "List<Float>", description: "List of numbers"}],
            returnType: "List<Float>",
            example: "val mode = mode(listOf(1f, 2f, 2f, 3f)) // Returns [2f]"
        },
      {
        name: "addInt",
        description: "Add two integers",
        parameters: [
          { name: "a", type: "Int", description: "First integer" },
          { name: "b", type: "Int", description: "Second integer" }
        ],
        returnType: "Int",
        example: "val sum = addInt(5, 3) // Returns 8"
      },
      {
        name: "addFloat",
        description: "Add two floating point numbers",
        parameters: [
          { name: "a", type: "Float", description: "First float" },
          { name: "b", type: "Float", description: "Second float" }
        ],
        returnType: "Float",
        example: "val sum = addFloat(5.2f, 3.7f) // Returns 8.9f"
      },
      {
        name: "addDouble",
        description: "Add two double precision numbers",
        parameters: [
          { name: "a", type: "Double", description: "First double" },
          { name: "b", type: "Double", description: "Second double" }
        ],
        returnType: "Double",
        example: "val sum = addDouble(5.25, 3.75) // Returns 9.0"
      }
    ],
    "Triangle": [
      {
        name: "triangleArea (with height and base)",
        description: "Calculate the area of a triangle using height and base",
        parameters: [
          { name: "height", type: "Float", description: "Height of the triangle" },
          { name: "base", type: "Float", description: "Base of the triangle" }
        ],
        returnType: "Float",
        example: "val area = triangleArea(10f, 5f) // Returns 25f"
      },
      {
        name: "triangleArea (with 3 sides)",
        description: "Calculate the area of a triangle using the lengths of its three sides (Heron's formula)",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "sideC", type: "Float", description: "Length of third side" }
        ],
        returnType: "Float",
        example: "val area = triangleArea(3f, 4f, 5f) // Returns 6f"
      },
      {
        name: "trianglePerimeter",
        description: "Calculate the perimeter of a triangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "sideC", type: "Float", description: "Length of third side" }
        ],
        returnType: "Float",
        example: "val perimeter = trianglePerimeter(3f, 4f, 5f) // Returns 12f"
      },
      {
        name: "triangleAngles",
        description: "Calculate the angles of a triangle in degrees",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "sideC", type: "Float", description: "Length of third side" },
          { name: "showLogs", type: "Boolean", description: "Whether to print calculation logs", default: "true" }
        ],
        returnType: "Triple<Float, Float, Float>?",
        example: "val angles = triangleAngles(3f, 4f, 5f) // Returns (36.9f, 53.1f, 90.0f)"
      },
      {
        name: "triangleSide",
        description: "Calculate the length of a side of a triangle knowing the lengths of the other two sides and the angle between them",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "angleBetween", type: "Float", description: "Angle between sideA and sideB in degrees" }
        ],
        returnType: "Float",
        example: "val sideC = triangleSide(4f, 7f, 110f) // Returns 9.1735"
      },
      {
          name: "equilateralTriangleArea",
          description: "Calculate the area of an equilateral triangle",
          parameters: [
              { name: "side", type: "Float", description: "Length of each side of the equilateral triangle" }
          ],
          returnType: "Float",
          example: "val area = equilateralTriangleArea(5f) // Returns 10.83f"
      },
      {
          name: "equilateralTrianglePerimeter",
          description: "Calculate the perimeter of an equilateral triangle",
          parameters: [
              { name: "side", type: "Float", description: "Length of each side of the equilateral triangle" }
          ],
          returnType: "Float",
          example: "val perimeter = equilateralTrianglePerimeter(5f) // Returns 15f"
      },
      {
          name: "isoscelesTriangleHeight",
          description: "Calculate the height of an isosceles triangle",
          parameters: [
              { name: "equalSide", type: "Float", description: "Length of the two equal sides" },
              { name: "base", type: "Float", description: "Length of the base" }
          ],
          returnType: "Float",
          example: "val height = isoscelesTriangleHeight(5f, 6f) // Returns 4.0f"
      },
      {
          name: "isoscelesTriangleArea",
          description: "Calculate the area of an isosceles triangle",
          parameters: [
              { name: "equalSide", type: "Float", description: "Length of the two equal sides" },
              { name: "base", type: "Float", description: "Length of the base" }
          ],
          returnType: "Float",
          example: "val area = isoscelesTriangleArea(5f, 6f) // Returns 12.0f"
      },
      {
          name: "isoscelesTrianglePerimeter",
          description: "Calculate the perimeter of an isosceles triangle",
          parameters: [
              { name: "equalSide", type: "Float", description: "Length of the two equal sides" },
              { name: "base", type: "Float", description: "Length of the base" }
          ],
          returnType: "Float",
          example: "val perimeter = isoscelesTrianglePerimeter(5f, 6f) // Returns 16f"
      },
      {
          name: "triangleHeight",
          description: "Calculate the height of a triangle given all three sides",
          parameters: [
              { name: "sideA", type: "Float", description: "Length of the first side" },
              { name: "sideB", type: "Float", description: "Length of the second side" },
              { name: "sideC", type: "Float", description: "Length of the third side" },
              { name: "respectToSide", type: "Float", description: "Which side to use as the base" }
          ],
          returnType: "Float",
          example: "val height = triangleHeight(3f, 4f, 5f, 3f) // Returns 4.0f (height with respect to side of length 3)"
      },
      {
          name: "triangleSemiPerimeter",
          description: "Calculate the semi-perimeter of a triangle",
          parameters: [
              { name: "sideA", type: "Float", description: "Length of the first side" },
              { name: "sideB", type: "Float", description: "Length of the second side" },
              { name: "sideC", type: "Float", description: "Length of the third side" }
          ],
          returnType: "Float",
          example: "val semiPerimeter = triangleSemiPerimeter(3f, 4f, 5f) // Returns 6f"
      },
      {
          name: "lawOfSines",
          description: "Apply the Law of Sines to find an unknown angle given two sides and an angle",
          parameters: [
              { name: "sideA", type: "Float", description: "Length of the first side" },
              { name: "sideB", type: "Float", description: "Length of the second side" },
              { name: "angleA", type: "Float", description: "Angle (in radians) opposite to sideA" }
          ],
          returnType: "Float",
          example: "val angleB = lawOfSines(3f, 4f, PI/6f) // Returns the angle (in radians) opposite to sideB"
      },
      {
          name: "lawOfCosines",
          description: "Apply the Law of Cosines to find an unknown angle in a triangle given all three sides",
          parameters: [
              { name: "sideA", type: "Float", description: "Length of the first side" },
              { name: "sideB", type: "Float", description: "Length of the second side" },
              { name: "sideC", type: "Float", description: "Length of the third side" }
          ],
          returnType: "Float",
          example: "val angleC = lawOfCosines(3f, 4f, 5f) // Returns the angle (in radians) opposite to sideC"
      }
    ],
    "Pythagorean Theorem": [
      {
        name: "pythagor",
        description: "Calculate the hypotenuse of a right triangle using the Pythagorean theorem",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the first leg" },
          { name: "sideB", type: "Float", description: "Length of the second leg" }
        ],
        returnType: "Float",
        example: "val hypotenuse = pythagor(3f, 4f) // Returns 5f"
      },
      {
        name: "pythagorCathetus",
        description: "Calculate a leg of a right triangle when given the other leg and the hypotenuse",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the known leg" },
          { name: "hypotenuse", type: "Float", description: "Length of the hypotenuse" }
        ],
        returnType: "Float",
        example: "val leg = pythagorCathetus(3f, 5f) // Returns 4f"
      }
    ],
    "Square": [
      {
        name: "squareArea",
        description: "Calculate the area of a square",
        parameters: [
          { name: "side", type: "Float", description: "Length of the side" }
        ],
        returnType: "Float",
        example: "val area = squareArea(5f) // Returns 25f"
      },
      {
        name: "squarePerimeter",
        description: "Calculate the perimeter of a square",
        parameters: [
          { name: "side", type: "Float", description: "Length of the side" }
        ],
        returnType: "Float",
        example: "val perimeter = squarePerimeter(5f) // Returns 20f"
      }
    ],
    "Rectangle": [
      {
        name: "rectArea",
        description: "Calculate the area of a rectangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the rectangle" },
          { name: "sideB", type: "Float", description: "Width of the rectangle" }
        ],
        returnType: "Float",
        example: "val area = rectArea(5f, 3f) // Returns 15f"
      },
      {
        name: "rectPerimeter",
        description: "Calculate the perimeter of a rectangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the rectangle" },
          { name: "sideB", type: "Float", description: "Width of the rectangle" }
        ],
        returnType: "Float",
        example: "val perimeter = rectPerimeter(5f, 3f) // Returns 16f"
      }
    ],
    "Circle": [
      {
        name: "circleArea",
        description: "Calculate the area of a circle",
        parameters: [
          { name: "radius", type: "Float", description: "Radius of the circle" }
        ],
        returnType: "Float",
        example: "val area = circleArea(5f) // Returns 78.54f"
      },
      {
        name: "circleLengthR",
        description: "Calculate the circumference of a circle using radius",
        parameters: [
          { name: "radius", type: "Float", description: "Radius of the circle" }
        ],
        returnType: "Float",
        example: "val circumference = circleLengthR(5f) // Returns 31.42f"
      },
      {
        name: "circleLengthD",
        description: "Calculate the circumference of a circle using diameter",
        parameters: [
          { name: "diameter", type: "Float", description: "Diameter of the circle" }
        ],
        returnType: "Float",
        example: "val circumference = circleLengthD(10f) // Returns 31.42f"
      }
    ],
    "Utility": [
      {
        name: "Float.toDegrees",
        description: "Convert angle from radians to degrees",
        parameters: [],
        returnType: "Float",
        example: "val degrees = (PI/4).toFloat().toDegrees() // Returns 45f"
      },
      {
        name: "Float.toRadians",
        description: "Convert angle from degrees to radians",
        parameters: [],
        returnType: "Float",
        example: "val radians = 45f.toRadians() // Returns 0.785f (π/4)"
      }
    ],
    "3D Shapes": [
        {
            name: "cuboidVolume",
            description: "Calculate the volume of a cuboid (rectangular prism)",
            parameters: [
              { name: "length", type: "Float", description: "Length of the cuboid" },
              { name: "width", type: "Float", description: "Width of the cuboid" },
              { name: "height", type: "Float", description: "Height of the cuboid" }
            ],
            returnType: "Float",
            example: "val volume = cuboidVolume(5f, 3f, 2f) // Returns 30f"
        },
        {
            name: "cubeVolume",
            description: "Calculate the volume of a cube",
            parameters: [
                {name: "side", type: "Float", description: "Length of the cube's side"}
            ],
            returnType: "Float",
            example: "val volume = cubeVolume(2f, 2f, 2f) // Returns 8f"
        },
        {
          name: "cubeSurfaceArea",
          description: "Calculate the surface area of a cube",
          parameters: [
              {name: "side", type: "Float", description: "Length of the cube's side"}
          ],
          returnType: "Float",
          example: "val area = cubeSurfaceArea(2f) // Returns 24f"
        },
        {
          name: "rectangularPrismVolume",
          description: "Calculate the volume of a rectangular prism",
          parameters: [
            { name: "length", type: "Float", description: "Length of the prism" },
            { name: "width", type: "Float", description: "Width of the prism" },
            { name: "height", type: "Float", description: "Height of the prism" }
          ],
          returnType: "Float",
          example: "val volume = rectangularPrismVolume(5f, 3f, 2f) // Returns 30f"
      },
      {
          name: "rectangularPrismSurfaceArea",
          description: "Calculate the surface area of a rectangular prism",
          parameters: [
            { name: "length", type: "Float", description: "Length of the prism" },
            { name: "width", type: "Float", description: "Width of the prism" },
            { name: "height", type: "Float", description: "Height of the prism" }
          ],
          returnType: "Float",
          example: "val area = rectangularPrismSurfaceArea(5f, 3f, 2f) // Returns 62f"
      },
      {
          name: "sphereVolume",
          description: "Calculate the volume of a sphere",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the sphere" }
          ],
          returnType: "Float",
          example: "val volume = sphereVolume(3f) // Returns 113.1f"
      },
      {
          name: "sphereSurfaceArea",
          description: "Calculate the surface area of a sphere",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the sphere" }
          ],
          returnType: "Float",
          example: "val area = sphereSurfaceArea(3f) // Returns 113.1f"
      },
      {
          name: "cylinderVolume",
          description: "Calculate the volume of a cylinder",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cylinder base" },
            { name: "height", type: "Float", description: "Height of the cylinder" }
          ],
          returnType: "Float",
          example: "val volume = cylinderVolume(2f, 5f) // Returns 62.83f"
      },
      {
          name: "cylinderSurfaceArea",
          description: "Calculate the surface area of a cylinder",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cylinder base" },
            { name: "height", type: "Float", description: "Height of the cylinder" }
          ],
          returnType: "Float",
          example: "val area = cylinderSurfaceArea(2f, 5f) // Returns 87.96f"
      },
      {
          name: "coneVolume",
          description: "Calculate the volume of a cone",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cone base" },
            { name: "height", type: "Float", description: "Height of the cone" }
          ],
          returnType: "Float",
          example: "val volume = coneVolume(3f, 6f) // Returns 56.55f"
      },
      {
          name: "coneSurfaceArea",
          description: "Calculate the surface area of a cone",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cone base" },
            { name: "height", type: "Float", description: "Height of the cone" }
          ],
          returnType: "Float",
          example: "val area = coneSurfaceArea(3f, 6f) // Returns 84.82f"
      },
      {
          name: "pyramidVolume",
          description: "Calculate the volume of a rectangular pyramid",
          parameters: [
            { name: "baseLength", type: "Float", description: "Length of the pyramid base" },
            { name: "baseWidth", type: "Float", description: "Width of the pyramid base" },
            { name: "height", type: "Float", description: "Height of the pyramid" }
          ],
          returnType: "Float",
          example: "val volume = pyramidVolume(6f, 4f, 5f) // Returns 40f"
      }
    ],
    "2D Shapes": [
        {
            name: "arcLength",
            description: "Calculate the length of an arc given radius and angle in radians",
            parameters: [
                { name: "radius", type: "Float", description: "Radius of the circle" },
                { name: "angleRadians", type: "Float", description: "Angle of the arc in radians" }
            ],
            returnType: "Float",
            example: "val length = arcLength(5f, PI.toFloat()/2) // Returns 7.85f (quarter circle)"
        },
        {
            name: "sectorArea",
            description: "Calculate the area of a sector given radius and angle in radians",
            parameters: [
                { name: "radius", type: "Float", description: "Radius of the circle" },
                { name: "angleRadians", type: "Float", description: "Angle of the sector in radians" }
            ],
            returnType: "Float",
            example: "val area = sectorArea(5f, PI.toFloat()/2) // Returns 19.63f (quarter circle)"
        },
        {
            name: "trapezoidArea",
            description: "Calculate the area of a trapezoid",
            parameters: [
                { name: "top", type: "Float", description: "Length of the top parallel side" },
                { name: "bottom", type: "Float", description: "Length of the bottom parallel side" },
                { name: "height", type: "Float", description: "Height between the parallel sides" }
            ],
            returnType: "Float",
            example: "val area = trapezoidArea(3f, 5f, 4f) // Returns 16f"
        },
        {
            name: "regularPolygonArea",
            description: "Calculate the area of a regular polygon given number of sides and side length",
            parameters: [
                { name: "numberOfSides", type: "Int", description: "Number of sides of the polygon" },
                { name: "sideLength", type: "Float", description: "Length of each side" }
            ],
            returnType: "Float",
            example: "val area = regularPolygonArea(6, 4f) // Returns 41.57f (regular hexagon)"
        },
        {
            name: "parallelogramArea",
            description: "Calculate the area of a parallelogram",
            parameters: [
                { name: "base", type: "Float", description: "Length of the base" },
                { name: "height", type: "Float", description: "Height perpendicular to the base" }
            ],
            returnType: "Float",
            example: "val area = parallelogramArea(5f, 3f) // Returns 15f"
        },
        {
            name: "rhombusArea",
            description: "Calculate the area of a rhombus using its diagonals",
            parameters: [
                { name: "diagonal1", type: "Float", description: "Length of first diagonal" },
                { name: "diagonal2", type: "Float", description: "Length of second diagonal" }
            ],
            returnType: "Float",
            example: "val area = rhombusArea(6f, 8f) // Returns 24f"
        },
        {
            name: "ellipsArea",
            description: "Calculate the area of an ellipse",
            parameters: [
                { name: "semiMajorAxis", type: "Float", description: "Length of the semi-major axis" },
                { name: "semiMinorAxis", type: "Float", description: "Length of the semi-minor axis" }
            ],
            returnType: "Float",
            example: "val area = ellipsArea(5f, 3f) // Returns 47.12f"
        }
    ],
    "Vectors": [
        {
            name: "vectorAdd",
            description: "Add two vectors of the same dimension",
            parameters: [
                { name: "vec1", type: "FloatArray", description: "First vector" },
                { name: "vec2", type: "FloatArray", description: "Second vector" }
            ],
            returnType: "FloatArray",
            example: "val result = vectorAdd(floatArrayOf(1f, 2f, 3f), floatArrayOf(4f, 5f, 6f)) // Returns [5f, 7f, 9f]"
        },
        {
            name: "vectorSubtract",
            description: "Subtract one vector from another (both must have the same dimension)",
            parameters: [
                { name: "vec1", type: "FloatArray", description: "Vector to subtract from" },
                { name: "vec2", type: "FloatArray", description: "Vector to subtract" }
            ],
            returnType: "FloatArray",
            example: "val result = vectorSubtract(floatArrayOf(5f, 7f, 9f), floatArrayOf(1f, 2f, 3f)) // Returns [4f, 5f, 6f]"
        },
        {
            name: "dotProduct",
            description: "Calculate the dot product of two vectors",
            parameters: [
                { name: "vec1", type: "FloatArray", description: "First vector" },
                { name: "vec2", type: "FloatArray", description: "Second vector" }
            ],
            returnType: "Float",
            example: "val result = dotProduct(floatArrayOf(1f, 2f, 3f), floatArrayOf(4f, 5f, 6f)) // Returns 32f"
        },
        {
            name: "crossProduct",
            description: "Calculate the cross product of two 3D vectors",
            parameters: [
                { name: "vec1", type: "FloatArray", description: "First 3D vector" },
                { name: "vec2", type: "FloatArray", description: "Second 3D vector" }
            ],
            returnType: "FloatArray",
            example: "val result = crossProduct(floatArrayOf(1f, 0f, 0f), floatArrayOf(0f, 1f, 0f)) // Returns [0f, 0f, 1f]"
        },
        {
            name: "vectorMagnitude",
            description: "Calculate the magnitude (length) of a vector",
            parameters: [
                { name: "vec", type: "FloatArray", description: "Input vector" }
            ],
            returnType: "Float",
            example: "val magnitude = vectorMagnitude(floatArrayOf(3f, 4f)) // Returns 5f"
        },
        {
            name: "unitVector",
            description: "Calculate the unit vector (vector with magnitude 1) in the same direction as the input vector",
            parameters: [
                { name: "vec", type: "FloatArray", description: "Input vector" }
            ],
            returnType: "FloatArray",
            example: "val unit = unitVector(floatArrayOf(3f, 0f, 0f)) // Returns [1f, 0f, 0f]"
        },
        {
            name: "angleBetweenVectors",
            description: "Calculate the angle (in radians) between two vectors",
            parameters: [
                { name: "vec1", type: "FloatArray", description: "First vector" },
                { name: "vec2", type: "FloatArray", description: "Second vector" }
            ],
            returnType: "Float",
            example: "val angle = angleBetweenVectors(floatArrayOf(1f, 0f), floatArrayOf(0f, 1f)) // Returns PI/2 (90 degrees)"
        }
    ],
    "Coordinate Geometry": [
        {
            name: "distance2D",
            description: "Calculate the distance between two points in 2D space",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" }
            ],
            returnType: "Float",
            example: "val dist = distance2D(1f, 2f, 4f, 6f) // Returns 5f"
        },
        {
            name: "distance3D",
            description: "Calculate the distance between two points in 3D space",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "z1", type: "Float", description: "z-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" },
                { name: "z2", type: "Float", description: "z-coordinate of second point" }
            ],
            returnType: "Float",
            example: "val dist = distance3D(1f, 2f, 3f, 4f, 5f, 6f) // Returns 5.196f"
        },
        {
            name: "midpoint2D",
            description: "Calculate the midpoint between two points in 2D space",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" }
            ],
            returnType: "Pair<Float, Float>",
            example: "val mid = midpoint2D(1f, 2f, 5f, 8f) // Returns Pair(3f, 5f)"
        },
        {
            name: "midpoint3D",
            description: "Calculate the midpoint between two points in 3D space",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "z1", type: "Float", description: "z-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" },
                { name: "z2", type: "Float", description: "z-coordinate of second point" }
            ],
            returnType: "Triple<Float, Float, Float>",
            example: "val mid = midpoint3D(2f, 4f, 6f, 4f, 8f, 10f) // Returns Triple(3f, 6f, 8f)"
        },
        {
            name: "slope",
            description: "Calculate the slope of a line between two points",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" }
            ],
            returnType: "Float",
            example: "val m = slope(1f, 2f, 4f, 8f) // Returns 2f"
        },
        {
            name: "lineEquation",
            description: "Calculate the coefficients of a line equation (ax + by + c = 0) passing through two points",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" }
            ],
            returnType: "Triple<Float, Float, Float>",
            example: "val coeffs = lineEquation(1f, 1f, 2f, 2f) // Returns Triple(1f, -1f, 0f) for the equation x - y = 0"
        },
        {
            name: "distancePointToLine",
            description: "Calculate the distance from a point to a line defined by the equation ax + by + c = 0",
            parameters: [
                { name: "x", type: "Float", description: "x-coordinate of the point" },
                { name: "y", type: "Float", description: "y-coordinate of the point" },
                { name: "a", type: "Float", description: "a coefficient in the line equation ax + by + c = 0" },
                { name: "b", type: "Float", description: "b coefficient in the line equation ax + by + c = 0" },
                { name: "c", type: "Float", description: "c coefficient in the line equation ax + by + c = 0" }
            ],
            returnType: "Float",
            example: "val dist = distancePointToLine(2f, 3f, 1f, -1f, 0f) // Distance from point (2,3) to line x - y = 0"
        },
        {
            name: "areCollinear",
            description: "Check if three points are collinear (lie on the same straight line)",
            parameters: [
                { name: "x1", type: "Float", description: "x-coordinate of first point" },
                { name: "y1", type: "Float", description: "y-coordinate of first point" },
                { name: "x2", type: "Float", description: "x-coordinate of second point" },
                { name: "y2", type: "Float", description: "y-coordinate of second point" },
                { name: "x3", type: "Float", description: "x-coordinate of third point" },
                { name: "y3", type: "Float", description: "y-coordinate of third point" }
            ],
            returnType: "Boolean",
            example: "val collinear = areCollinear(1f, 1f, 2f, 2f, 3f, 3f) // Returns true as points lie on the same line"
        }
    ]
  };