export const mathFunctions = {
    "Basic Arithmetic": [
      {
        name: "addInt",
        description: "Add two integers",
        parameters: [
          { name: "a", type: "Int", description: "First integer" },
          { name: "b", type: "Int", description: "Second integer" }
        ],
        returnType: "Int",
        example: "val sum = math.addInt(5, 3) // Returns 8",
        code: `fun addInt(a: Int, b: Int): Int{
    return a+b
}`
      },
      {
        name: "addFloat",
        description: "Add two floating point numbers",
        parameters: [
          { name: "a", type: "Float", description: "First float" },
          { name: "b", type: "Float", description: "Second float" }
        ],
        returnType: "Float",
        example: "val sum = math.addFloat(5.2f, 3.7f) // Returns 8.9f",
        code: `fun addFloat(a: Float, b: Float): Float{
    return a + b
}`
      },
      {
        name: "addDouble",
        description: "Add two double precision numbers",
        parameters: [
          { name: "a", type: "Double", description: "First double" },
          { name: "b", type: "Double", description: "Second double" }
        ],
        returnType: "Double",
        example: "val sum = math.addDouble(5.25, 3.75) // Returns 9.0",
        code: `fun addDouble(a: Double, b: Double): Double{
    return a + b
}`
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
        example: "val area = math.triangleArea(10f, 5f) // Returns 25f",
        code: `fun triangleArea(height: Float, base: Float): Float{
      val area = (0.5 * height * base).toFloat()
    return area
}`
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
        example: "val area = math.triangleArea(3f, 4f, 5f) // Returns 6f",
        code: `fun triangleArea(sideA: Float, sideB: Float, sideC: Float): Float{
      val perimeter = sideA + sideB + sideC
      val semiPerimeter = perimeter/2
  
      val area = sqrt(semiPerimeter * (semiPerimeter - sideA) 
          * (semiPerimeter - sideB) * (semiPerimeter - sideC))
  
    return area
}`
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
        example: "val perimeter = math.trianglePerimeter(3f, 4f, 5f) // Returns 12f",
        code: `fun trianglePerimeter(sideA: Float, sideB: Float, sideC: Float): Float{
    return sideA + sideB + sideC
}`
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
        example: "val angles = math.triangleAngles(3f, 4f, 5f) // Returns (36.9f, 53.1f, 90.0f)",
        code: `fun triangleAngles(sideA: Float, sideB: Float, sideC: Float, showLogs: Boolean = true): Triple<Float, Float, Float>? {
      if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
          println("Error: The given side lengths do not form a valid triangle.")
          return null
      }
  
      val cosAlpha = (sideB.pow(2) + sideC.pow(2) - sideA.pow(2)) / (2 * sideB * sideC)
      val sinAlpha = sqrt(1 - cosAlpha.pow(2))
      val alphaRad = atan2(sinAlpha, cosAlpha)
  
      val cosBeta = (sideA.pow(2) + sideC.pow(2) - sideB.pow(2)) / (2 * sideA * sideC)
      val sinBeta = sqrt(1 - cosBeta.pow(2))
      val betaRad = atan2(sinBeta, cosBeta)
  
      val cosTheta = (sideA.pow(2) + sideB.pow(2) - sideC.pow(2)) / (2 * sideA * sideB)
      val sinTheta = sqrt(1 - cosTheta.pow(2))
      val thetaRad = atan2(sinTheta, cosTheta)
  
      val alphaDeg = alphaRad.toDegrees()
      val betaDeg = betaRad.toDegrees()
      val thetaDeg = thetaRad.toDegrees()
  
      if (showLogs){
          println("Angle opposite side a1: \${String.format("%.3f", alphaDeg)} degrees")
          println("Angle opposite side a2: \${String.format("%.3f", betaDeg)} degrees")
          println("Angle opposite side l: \${String.format("%.3f", thetaDeg)} degrees")
  
          val angleSum = alphaDeg + betaDeg + thetaDeg
          println("Sum of angles: \${String.format("%.3f", angleSum)} degrees")
      }
  
    return Triple(alphaDeg, betaDeg, thetaDeg)
}`
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
        example: "val sideC = math.triangleSide(4f, 7f, 110f) // Returns 9.1735",
        code:`fun triangleSide(sideA: Float, sideB: Float, angleBetween: Float): Float{
    // angleBetween must be given in degrees
    val sideC = sqrt(sideB.pow(2) + sideA.pow(2) - 2 * sideA * sideB * cos(angleBetween.toRadians()))

    return sideC
}`
      },
      {
          name: "equilateralTriangleArea",
          description: "Calculate the area of an equilateral triangle",
          parameters: [
              { name: "side", type: "Float", description: "Length of each side of the equilateral triangle" }
          ],
          returnType: "Float",
          example: "val area = math.equilateralTriangleArea(5f) // Returns 10.83f",
          code: `fun equilateralTriangleArea(side: Float): Float {
    return (sqrt(3f) / 4f) * side.pow(2)
}`
      },
      {
          name: "equilateralTrianglePerimeter",
          description: "Calculate the perimeter of an equilateral triangle",
          parameters: [
              { name: "side", type: "Float", description: "Length of each side of the equilateral triangle" }
          ],
          returnType: "Float",
          example: "val perimeter = math.equilateralTrianglePerimeter(5f) // Returns 15f",
          code: `fun equilateralTrianglePerimeter(side: Float): Float {
    return 3 * side
}`
      },
      {
          name: "isoscelesTriangleHeight",
          description: "Calculate the height of an isosceles triangle",
          parameters: [
              { name: "equalSide", type: "Float", description: "Length of the two equal sides" },
              { name: "base", type: "Float", description: "Length of the base" }
          ],
          returnType: "Float",
          example: "val height = math.isoscelesTriangleHeight(5f, 6f) // Returns 4.0f",
          code: `fun isoscelesTriangleHeight(equalSide: Float, base: Float): Float {
    return sqrt(equalSide.pow(2) - (base.pow(2) / 4f))
}`
      },
      {
          name: "isoscelesTriangleArea",
          description: "Calculate the area of an isosceles triangle",
          parameters: [
              { name: "equalSide", type: "Float", description: "Length of the two equal sides" },
              { name: "base", type: "Float", description: "Length of the base" }
          ],
          returnType: "Float",
          example: "val area = math.isoscelesTriangleArea(5f, 6f) // Returns 12.0f",
          code: `fun isoscelesTriangleArea(equalSide: Float, base: Float): Float {
    val height = isoscelesTriangleHeight(equalSide, base)
    return (base * height) / 2f
}`
      },
      {
          name: "isoscelesTrianglePerimeter",
          description: "Calculate the perimeter of an isosceles triangle",
          parameters: [
              { name: "equalSide", type: "Float", description: "Length of the two equal sides" },
              { name: "base", type: "Float", description: "Length of the base" }
          ],
          returnType: "Float",
          example: "val perimeter = math.isoscelesTrianglePerimeter(5f, 6f) // Returns 16f",
          code: `fun isoscelesTrianglePerimeter(equalSide: Float, base: Float): Float {
    return 2 * equalSide + base
}`
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
          example: "val height = math.triangleHeight(3f, 4f, 5f, 3f) // Returns 4.0f (height with respect to side of length 3)",
          code: `fun triangleHeight(sideA: Float, sideB: Float, sideC: Float, respectToSide: Float): Float {

    val s = (sideA + sideB + sideC) / 2f
    val area = sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))

    return 2f * area / respectToSide
}`
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
          example: "val semiPerimeter = math.triangleSemiPerimeter(3f, 4f, 5f) // Returns 6f",
          code: `fun triangleSemiPerimeter(sideA: Float, sideB: Float, sideC: Float): Float {
    return (sideA + sideB + sideC) / 2f
}`
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
          example: "val angleB = math.lawOfSines(3f, 4f, PI/6f) // Returns the angle (in radians) opposite to sideB",
          code: `fun lawOfSines(sideA: Float, sideB: Float, angleA: Float): Float {
    // angleA must be in radians
    val sinAngleB = (sideB * sin(angleA)) / sideA

    if (sinAngleB > 1 || sinAngleB < -1) {
        throw IllegalArgumentException("No valid angle exists for the given inputs.")
    }
    return asin(sinAngleB)
}`
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
          example: "val angleC = math.lawOfCosines(3f, 4f, 5f) // Returns the angle (in radians) opposite to sideC",
          code: `fun lawOfCosines(sideA: Float, sideB: Float, sideC: Float): Float {

    val cosC = (sideA.pow(2) + sideB.pow(2) - sideC.pow(2)) / (2f * sideA * sideB)

    if (cosC > 1 || cosC < -1) {
        throw IllegalArgumentException("No valid angle exists for the given sides. They may not form a triangle.")
    }
    return acos(cosC)
}`
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
        example: "val hypotenuse = math.pythagor(3f, 4f) // Returns 5f",
        code: `fun pythagor(sideA: Float, sideB: Float): Float {
      val hypotenuse = sideA.pow(2) + sideB.pow(2)
    return sqrt(hypotenuse)
}`
      },
      {
        name: "pythagorCathetus",
        description: "Calculate a leg of a right triangle when given the other leg and the hypotenuse",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the known leg" },
          { name: "hypotenuse", type: "Float", description: "Length of the hypotenuse" }
        ],
        returnType: "Float",
        example: "val leg = math.pythagorCathetus(3f, 5f) // Returns 4f",
        code: `fun pythagorCathetus(sideA: Float, hypotenuse: Float): Float{
      val sideB = hypotenuse.pow(2) - sideA.pow(2)
    return sqrt(sideB)
}`
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
        example: "val area = math.squareArea(5f) // Returns 25f",
        code: `fun squareArea(side: Float): Float{
    return side.pow(2)
}`
      },
      {
        name: "squarePerimeter",
        description: "Calculate the perimeter of a square",
        parameters: [
          { name: "side", type: "Float", description: "Length of the side" }
        ],
        returnType: "Float",
        example: "val perimeter = math.squarePerimeter(5f) // Returns 20f",
        code: `fun squarePerimeter(side: Float): Float{
    return side * 4
}`
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
        example: "val area = math.rectArea(5f, 3f) // Returns 15f",
        code: `fun rectArea(sideA: Float, sideB: Float): Float{
    return sideA * sideB
}`
      },
      {
        name: "rectPerimeter",
        description: "Calculate the perimeter of a rectangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the rectangle" },
          { name: "sideB", type: "Float", description: "Width of the rectangle" }
        ],
        returnType: "Float",
        example: "val perimeter = math.rectPerimeter(5f, 3f) // Returns 16f",
        code: `fun rectPerimeter(sideA: Float, sideB: Float): Float{
    return (sideA + sideB) * 2
}`
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
        example: "val area = math.circleArea(5f) // Returns 78.54f",
        code: `fun circleArea(radius: Float): Float{
    return PI.toFloat() * (radius.pow(2))
}`
      },
      {
        name: "circleLengthR",
        description: "Calculate the circumference of a circle using radius",
        parameters: [
          { name: "radius", type: "Float", description: "Radius of the circle" }
        ],
        returnType: "Float",
        example: "val circumference = math.circleLengthR(5f) // Returns 31.42f",
        code: `fun circleLengthR(radius: Float): Float{
    return 2 * PI.toFloat() * radius
}`
      },
      {
        name: "circleLengthD",
        description: "Calculate the circumference of a circle using diameter",
        parameters: [
          { name: "diameter", type: "Float", description: "Diameter of the circle" }
        ],
        returnType: "Float",
        example: "val circumference = math.circleLengthD(10f) // Returns 31.42f",
        code: `fun circleLengthD(diameter: Float): Float{
    return PI.toFloat() * diameter
}`
      }
    ],
    "Utility": [
      {
        name: "Float.toDegrees",
        description: "Convert angle from radians to degrees",
        parameters: [],
        returnType: "Float",
        example: "val degrees = (PI/4).toFloat().toDegrees() // Returns 45f",
        code: `fun Float.toDegrees(): Float {
    return this * 180f / PI.toFloat()
}`
      },
      {
        name: "Float.toRadians",
        description: "Convert angle from degrees to radians",
        parameters: [],
        returnType: "Float",
        example: "val radians = 45f.toRadians() // Returns 0.785f (π/4)",
        code: `fun Float.toRadians(): Float {
    return this * PI.toFloat() / 180f
}`
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
            example: "val volume = math.cuboidVolume(5f, 3f, 2f) // Returns 30f",
            code: `fun cuboidVolume(length: Float, width: Float, height: Float): Float {
    return length * width * height
}`
        },
        {
            name: "cubeVolume",
            description: "Calculate the volume of a cube",
            parameters: [
                {name: "side", type: "Float", description: "Length of the cube's side"}
            ],
            returnType: "Float",
            example: "val volume = math.cubeVolume(2f, 2f, 2f) // Returns 8f",
            code: `fun cubeVolume(side: Float): Float{
    return side.pow(3)
}`
        },
        {
          name: "cubeSurfaceArea",
          description: "Calculate the surface area of a cube",
          parameters: [
              {name: "side", type: "Float", description: "Length of the cube's side"}
          ],
          returnType: "Float",
          example: "val area = math.cubeSurfaceArea(2f) // Returns 24f",
          code: `fun cubeSurfaceArea(side: Float): Float {
    return 6 * side.pow(2)
}`
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
          example: "val volume = math.rectangularPrismVolume(5f, 3f, 2f) // Returns 30f",
          code: `fun rectangularPrismVolume(length: Float, width: Float, height: Float): Float {
    return length * width * height
}`
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
          example: "val area = math.rectangularPrismSurfaceArea(5f, 3f, 2f) // Returns 62f",
          code: `fun rectangularPrismSurfaceArea(length: Float, width: Float, height: Float): Float {
    return 2 * (length * width + length * height + width * height)
}`
      },
      {
          name: "sphereVolume",
          description: "Calculate the volume of a sphere",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the sphere" }
          ],
          returnType: "Float",
          example: "val volume = math.sphereVolume(3f) // Returns 113.1f",
          code: `fun sphereVolume(radius: Float): Float {
    return ((4.0 / 3.0) * PI * radius.pow(3)).toFloat()
}`
      },
      {
          name: "sphereSurfaceArea",
          description: "Calculate the surface area of a sphere",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the sphere" }
          ],
          returnType: "Float",
          example: "val area = math.sphereSurfaceArea(3f) // Returns 113.1f",
          code: `fun sphereSurfaceArea(radius: Float): Float {
    return (4 * PI * radius.pow(2)).toFloat()
}`
      },
      {
          name: "cylinderVolume",
          description: "Calculate the volume of a cylinder",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cylinder base" },
            { name: "height", type: "Float", description: "Height of the cylinder" }
          ],
          returnType: "Float",
          example: "val volume = math.cylinderVolume(2f, 5f) // Returns 62.83f",
          code: `fun cylinderVolume(radius: Float, height: Float): Float {
    return (PI * height * radius.pow(2)).toFloat()
}`
      },
      {
          name: "cylinderSurfaceArea",
          description: "Calculate the surface area of a cylinder",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cylinder base" },
            { name: "height", type: "Float", description: "Height of the cylinder" }
          ],
          returnType: "Float",
          example: "val area = math.cylinderSurfaceArea(2f, 5f) // Returns 87.96f",
          code: `fun cylinderSurfaceArea(radius: Float, height: Float): Float {
    return (2 * PI * radius * (radius + height)).toFloat()
}`
      },
      {
          name: "coneVolume",
          description: "Calculate the volume of a cone",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cone base" },
            { name: "height", type: "Float", description: "Height of the cone" }
          ],
          returnType: "Float",
          example: "val volume = math.coneVolume(3f, 6f) // Returns 56.55f",
          code: `fun coneVolume(radius: Float, height: Float): Float {
    return ((1.0 / 3.0) * PI * height * radius.pow(2)).toFloat()
}`
      },
      {
          name: "coneSurfaceArea",
          description: "Calculate the surface area of a cone",
          parameters: [
            { name: "radius", type: "Float", description: "Radius of the cone base" },
            { name: "height", type: "Float", description: "Height of the cone" }
          ],
          returnType: "Float",
          example: "val area = math.coneSurfaceArea(3f, 6f) // Returns 84.82f",
          code: `fun coneSurfaceArea(radius: Float, height: Float): Float {
    return (PI * radius * (radius + sqrt(height.pow(2) + radius.pow(2)))).toFloat()
}`
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
          example: "val volume = math.pyramidVolume(6f, 4f, 5f) // Returns 40f",
          code: `fun pyramidVolume(baseLength: Float, baseWidth: Float, height: Float): Float {
    return ((1.0 / 3.0) * baseLength * baseWidth * height).toFloat()
}`
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
            example: "val length = math.arcLength(5f, PI.toFloat()/2) // Returns 7.85f (quarter circle)",
            code: `fun arcLength(radius: Float, angleRadians: Float): Float {
    return radius * angleRadians
}`
        },
        {
            name: "sectorArea",
            description: "Calculate the area of a sector given radius and angle in radians",
            parameters: [
                { name: "radius", type: "Float", description: "Radius of the circle" },
                { name: "angleRadians", type: "Float", description: "Angle of the sector in radians" }
            ],
            returnType: "Float",
            example: "val area = math.sectorArea(5f, PI.toFloat()/2) // Returns 19.63f (quarter circle)",
            code: `fun sectorArea(radius: Float, angleRadians: Float): Float {
    return (0.5 * radius.pow(2) * angleRadians).toFloat()
}`
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
            example: "val area = math.trapezoidArea(3f, 5f, 4f) // Returns 16f",
            code: `fun trapezoidArea(top: Float, bottom: Float, height: Float): Float {
    return (0.5 * (top + bottom) * height).toFloat()
}`
        },
        {
            name: "regularPolygonArea",
            description: "Calculate the area of a regular polygon given number of sides and side length",
            parameters: [
                { name: "numberOfSides", type: "Int", description: "Number of sides of the polygon" },
                { name: "sideLength", type: "Float", description: "Length of each side" }
            ],
            returnType: "Float",
            example: "val area = math.regularPolygonArea(6, 4f) // Returns 41.57f (regular hexagon)",
            code: `fun regularPolygonArea(numberOfSides: Int, sideLength: Float): Float {
        val apothem = sideLength / (2 * tan(PI / numberOfSides))
    return ((numberOfSides * sideLength * apothem) / 2).toFloat()
}`
        },
        {
            name: "parallelogramArea",
            description: "Calculate the area of a parallelogram",
            parameters: [
                { name: "base", type: "Float", description: "Length of the base" },
                { name: "height", type: "Float", description: "Height perpendicular to the base" }
            ],
            returnType: "Float",
            example: "val area = math.parallelogramArea(5f, 3f) // Returns 15f",
            code: `fun parallelogramArea(base: Float, height: Float): Float {
    return base * height
}`
        },
        {
            name: "rhombusArea",
            description: "Calculate the area of a rhombus using its diagonals",
            parameters: [
                { name: "diagonal1", type: "Float", description: "Length of first diagonal" },
                { name: "diagonal2", type: "Float", description: "Length of second diagonal" }
            ],
            returnType: "Float",
            example: "val area = math.rhombusArea(6f, 8f) // Returns 24f",
            code: `fun rhombusArea(diagonal1: Float, diagonal2: Float): Float {
    return (diagonal1 * diagonal2) / 2
}`
        },
        {
            name: "ellipsArea",
            description: "Calculate the area of an ellipse",
            parameters: [
                { name: "semiMajorAxis", type: "Float", description: "Length of the semi-major axis" },
                { name: "semiMinorAxis", type: "Float", description: "Length of the semi-minor axis" }
            ],
            returnType: "Float",
            example: "val area = math.ellipsArea(5f, 3f) // Returns 47.12f",
            code: `fun ellipsArea(semiMajorAxis: Float, semiMinorAxis: Float): Float {
    return (PI * semiMajorAxis * semiMinorAxis).toFloat()
}`
        }
    ]
  };