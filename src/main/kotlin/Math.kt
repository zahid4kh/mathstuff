package math

import kotlin.math.*

class Math {

    fun addInt(a: Int, b: Int): Int{
        return a+b
    }

    fun addFloat(a: Float, b: Float): Float{
        return a + b
    }

    fun addDouble(a: Double, b: Double): Double{
        return a + b
    }

    fun pythagor(sideA: Float, sideB: Float): Float {
        val hypotenuse = sideA.pow(2) + sideB.pow(2)

        return sqrt(hypotenuse)
    }

    fun pythagorCathetus(sideA: Float, hypotenuse: Float): Float{
        val sideB = hypotenuse.pow(2) - sideA.pow(2)

        return sqrt(sideB)
    }

    fun squareArea(side: Float): Float{
        return side.pow(2)
    }

    fun squarePerimeter(side: Float): Float{
        return side * 4
    }

    fun rectArea(sideA: Float, sideB: Float): Float{
        return sideA * sideB
    }

    fun rectPerimeter(sideA: Float, sideB: Float): Float{
        return (sideA + sideB) * 2
    }

    fun triangleArea(height: Float, base: Float): Float{

        val area = (0.5 * height * base).toFloat()

        return area
    }

    fun triangleArea(sideA: Float, sideB: Float, sideC: Float): Float{
        val perimeter = sideA + sideB + sideC
        val semiPerimeter = perimeter/2

        val area = sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC))

        return area
    }

    fun trianglePerimeter(sideA: Float, sideB: Float, sideC: Float): Float{
        return sideA + sideB + sideC
    }

    fun triangleAngles(sideA: Float, sideB: Float, sideC: Float, showLogs: Boolean = true): Triple<Float, Float, Float>? {
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
            println("Angle opposite side a1: ${String.format("%.3f", alphaDeg)} degrees")
            println("Angle opposite side a2: ${String.format("%.3f", betaDeg)} degrees")
            println("Angle opposite side l: ${String.format("%.3f", thetaDeg)} degrees")

            val angleSum = alphaDeg + betaDeg + thetaDeg
            println("Sum of angles: ${String.format("%.3f", angleSum)} degrees")
        }

        return Triple(alphaDeg, betaDeg, thetaDeg)
    }

    fun triangleSide(sideA: Float, sideB: Float, angleBetween: Float): Float{
        // angleBetween must be given in degrees
        val sideC = sqrt(sideB.pow(2) + sideA.pow(2) - 2 * sideA * sideB * cos(angleBetween.toRadians()))

        return sideC
    }

    fun circleArea(radius: Float): Float{
        return PI.toFloat() * (radius.pow(2))
    }

    fun circleLengthR(radius: Float): Float{
        return 2 * PI.toFloat() * radius
    }

    fun circleLengthD(diameter: Float): Float{
        return PI.toFloat() * diameter
    }

    fun cubeVolume(side: Float): Float{
        return side.pow(3)
    }

    fun cuboidVolume(length: Float, width: Float, height: Float): Float{
        return length * width * height
    }

    fun cubeSurfaceArea(side: Float): Float {
        return 6 * side.pow(2)
    }

    fun rectangularPrismVolume(length: Float, width: Float, height: Float): Float {
        return length * width * height
    }

    fun rectangularPrismSurfaceArea(length: Float, width: Float, height: Float): Float {
        return 2 * (length * width + length * height + width * height)
    }

    fun sphereVolume(radius: Float): Float {
        return ((4.0 / 3.0) * PI * radius.pow(3)).toFloat()
    }

    fun sphereSurfaceArea(radius: Float): Float {
        return (4 * PI * radius.pow(2)).toFloat()
    }

    fun cylinderVolume(radius: Float, height: Float): Float {
        return (PI * height * radius.pow(2)).toFloat()
    }

    fun cylinderSurfaceArea(radius: Float, height: Float): Float {
        return (2 * PI * radius * (radius + height)).toFloat()
    }

    fun coneVolume(radius: Float, height: Float): Float {
        return ((1.0 / 3.0) * PI * height * radius.pow(2)).toFloat()
    }

    fun coneSurfaceArea(radius: Float, height: Float): Float {
        return (PI * radius * (radius + sqrt(height.pow(2) + radius.pow(2)))).toFloat()
    }

    fun pyramidVolume(baseLength: Float, baseWidth: Float, height: Float): Float {
        return ((1.0 / 3.0) * baseLength * baseWidth * height).toFloat()
    }

    fun arcLength(radius: Float, angleRadians: Float): Float {
        return radius * angleRadians
    }

    fun sectorArea(radius: Float, angleRadians: Float): Float {
        return (0.5 * radius.pow(2) * angleRadians).toFloat()
    }

    fun trapezoidArea(top: Float, bottom: Float, height: Float): Float {
        return (0.5 * (top + bottom) * height).toFloat()
    }

    fun regularPolygonArea(numberOfSides: Int, sideLength: Float): Float {
        val apothem = sideLength / (2 * tan(PI / numberOfSides))
        return ((numberOfSides * sideLength * apothem) / 2).toFloat()
    }

    fun parallelogramArea(base: Float, height: Float): Float {
        return base * height
    }

    fun rhombusArea(diagonal1: Float, diagonal2: Float): Float {
        return (diagonal1 * diagonal2) / 2
    }

    fun ellipsArea(semiMajorAxis: Float, semiMinorAxis: Float): Float {
        return (PI * semiMajorAxis * semiMinorAxis).toFloat()
    }

    fun equilateralTriangleArea(side: Float): Float {
        return (sqrt(3f) / 4f) * side.pow(2)
    }

    fun equilateralTrianglePerimeter(side: Float): Float {
        return 3 * side
    }

    fun isoscelesTriangleHeight(equalSide: Float, base: Float): Float {
        return sqrt(equalSide.pow(2) - (base.pow(2) / 4f))
    }

    fun isoscelesTriangleArea(equalSide: Float, base: Float): Float {
        val height = isoscelesTriangleHeight(equalSide, base)
        return (base * height) / 2f
    }

    fun isoscelesTrianglePerimeter(equalSide: Float, base: Float): Float {
        return 2 * equalSide + base
    }

    fun triangleHeight(sideA: Float, sideB: Float, sideC: Float, respectToSide: Float): Float {
        val s = (sideA + sideB + sideC) / 2f
        val area = sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))

        // h = 2 * area / base
        // respectToSide - is the side to which the line is extended to
        return 2f * area / respectToSide
    }

    // a/sin(A) = b/sin(B) = c/sin(C)
    fun lawOfSines(sideA: Float, sideB: Float, angleA: Float): Float {
        // angleA must be in radians
        val sinAngleB = (sideB * sin(angleA)) / sideA

        if (sinAngleB > 1 || sinAngleB < -1) {
            throw IllegalArgumentException("No valid angle exists for the given inputs.")
        }
        return asin(sinAngleB)
    }

    // c² = a² + b² - 2ab*cos(C)
    fun lawOfCosines(sideA: Float, sideB: Float, sideC: Float): Float {
        val cosC = (sideA.pow(2) + sideB.pow(2) - sideC.pow(2)) / (2f * sideA * sideB)

        if (cosC > 1 || cosC < -1) {
            throw IllegalArgumentException("No valid angle exists for the given sides. They may not form a triangle.")
        }
        return acos(cosC)
    }

    fun triangleSemiPerimeter(sideA: Float, sideB: Float, sideC: Float): Float {
        return (sideA + sideB + sideC) / 2f
    }

    fun vectorAdd(vec1: FloatArray, vec2: FloatArray): FloatArray {
        if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

        val result = FloatArray(vec1.size)
        for (i in vec1.indices) {
            result[i] = vec1[i] + vec2[i]
        }
        return result
    }

    fun vectorSubtract(vec1: FloatArray, vec2: FloatArray): FloatArray {
        if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

        val result = FloatArray(vec1.size)
        for (i in vec1.indices) {
            result[i] = vec1[i] - vec2[i]
        }
        return result
    }

    fun dotProduct(vec1: FloatArray, vec2: FloatArray): Float {
        if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

        var result = 0f
        for (i in vec1.indices) {
            result += vec1[i] * vec2[i]
        }
        return result
    }

    fun crossProduct(vec1: FloatArray, vec2: FloatArray): FloatArray {
        if (vec1.size != 3 || vec2.size != 3) throw IllegalArgumentException("Cross product requires 3D vectors")

        return floatArrayOf(
            vec1[1] * vec2[2] - vec1[2] * vec2[1],
            vec1[2] * vec2[0] - vec1[0] * vec2[2],
            vec1[0] * vec2[1] - vec1[1] * vec2[0]
        )
    }

    fun vectorMagnitude(vec: FloatArray): Float {
        var sumOfSquares = 0f
        for (component in vec) {
            sumOfSquares += component * component
        }
        return sqrt(sumOfSquares)
    }

    fun unitVector(vec: FloatArray): FloatArray {
        val magnitude = vectorMagnitude(vec)
        if (magnitude == 0f) throw IllegalArgumentException("Cannot normalize a zero vector")

        val result = FloatArray(vec.size)
        for (i in vec.indices) {
            result[i] = vec[i] / magnitude
        }
        return result
    }

    fun angleBetweenVectors(vec1: FloatArray, vec2: FloatArray): Float {
        if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

        val dotProd = dotProduct(vec1, vec2)
        val mag1 = vectorMagnitude(vec1)
        val mag2 = vectorMagnitude(vec2)

        // for acos (-1 to 1)
        val cosTheta = (dotProd / (mag1 * mag2)).coerceIn(-1f, 1f)
        return acos(cosTheta)
    }

    fun distance2D(x1: Float, y1: Float, x2: Float, y2: Float): Float {
        return sqrt((x2 - x1).pow(2) + (y2 - y1).pow(2))
    }

    fun distance3D(x1: Float, y1: Float, z1: Float, x2: Float, y2: Float, z2: Float): Float {
        return sqrt((x2 - x1).pow(2) + (y2 - y1).pow(2) + (z2 - z1).pow(2))
    }

    fun midpoint2D(x1: Float, y1: Float, x2: Float, y2: Float): Pair<Float, Float> {
        return Pair((x1 + x2) / 2, (y1 + y2) / 2)
    }

    fun midpoint3D(x1: Float, y1: Float, z1: Float, x2: Float, y2: Float, z2: Float): Triple<Float, Float, Float> {
        return Triple((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2)
    }

    fun slope(x1: Float, y1: Float, x2: Float, y2: Float): Float {
        if (x1 == x2) {
            throw IllegalArgumentException("Vertical line has undefined slope (infinity)")
        }
        return (y2 - y1) / (x2 - x1)
    }

    fun lineEquation(x1: Float, y1: Float, x2: Float, y2: Float): Triple<Float, Float, Float> {
        val a = y2 - y1
        val b = x1 - x2
        val c = x2 * y1 - x1 * y2
        // returns coefficients a, b, c for equation ax + by + c = 0
        return Triple(a, b, c)
    }

    // line defined by ax + by + c = 0
    fun distancePointToLine(x: Float, y: Float, a: Float, b: Float, c: Float): Float {
        return abs(a * x + b * y + c) / sqrt(a.pow(2) + b.pow(2))
    }

    fun areCollinear(x1: Float, y1: Float, x2: Float, y2: Float, x3: Float, y3: Float): Boolean {
        // If area is zero (or very close to zero), points are collinear
        val area = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2
        return area < 0.0001f
    }

    fun Float.toDegrees(): Float {
        return this * 180f / PI.toFloat()
    }

    fun Float.toRadians(): Float {
        return this * PI.toFloat() / 180f
    }
}