package math.twoD.triangles

import kotlin.math.PI
import kotlin.math.acos
import kotlin.math.asin
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.pow
import kotlin.math.sin
import kotlin.math.sqrt


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


fun Float.toDegrees(): Float {
    return this * 180f / PI.toFloat()
}

fun Float.toRadians(): Float {
    return this * PI.toFloat() / 180f
}