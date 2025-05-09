package math.twoD.rectangle

fun rectArea(sideA: Float, sideB: Float): Float{
    return sideA * sideB
}

fun rectPerimeter(sideA: Float, sideB: Float): Float{
    return (sideA + sideB) * 2
}


/**
 * Checks if a rectangle with the given side lengths is a golden rectangle.
 *
 * A rectangle is considered golden if the ratio of its longer side to its shorter side
 * is approximately equal to the golden ratio (φ ≈ 1.618...).
 * This function determines this by checking if the ratio of the shorter side to the difference
 * between the longer and shorter sides (`shorterSide / (longerSide - shorterSide)`)
 * is close to the golden ratio.
 *
 * @param sideA The length of one side of the rectangle.
 * @param sideB The length of the other side of the rectangle.
 * @param tolerance The acceptable relative difference from the golden ratio for the check.
 *                  Defaults to 0.01 (1%). A smaller tolerance means a stricter check.
 * @return `true` if the rectangle is a golden rectangle within the specified tolerance and both sides are positive,
 *         `false` otherwise. Returns `false` if either side is non-positive or if the sides form a square
 *         (as a square cannot satisfy the golden ratio property in this specific check due to division by zero).
 */
fun isGoldenRect(sideA: Float, sideB: Float, tolerance: Double = 0.01): Boolean {
    if (sideA <= 0 || sideB <= 0) return false

    val goldenRatio = (1 + sqrt(5.0)) / 2

    val biggerSide = maxOf(sideA, sideB)
    val smallerSide = minOf(sideA, sideB)
    if (biggerSide == smallerSide) return false

    val smallerPortionOfBiggerSide = biggerSide - smallerSide
    if (smallerPortionOfBiggerSide == 0.0f) return false

    val ratio = smallerSide / smallerPortionOfBiggerSide

    return abs(ratio - goldenRatio) <= tolerance
}

/**
 * Calculates the length of the other side required to make a rectangle golden,
 * given one side and whether that side is intended to be the shorter or longer side
 * of the resulting golden rectangle.
 *
 * The golden ratio (φ) is approximately 1.618...
 * - If `givenSide` is the shorter side (S), the longer side (L) will be S * φ.
 * - If `givenSide` is the longer side (L), the shorter side (S) will be L / φ.
 *
 * @param givenSide The length of the known side. Must be a positive value.
 * @param isShorterSide `true` if `givenSide` is intended to be the shorter side of the golden rectangle;
 *                      `false` if it's intended to be the longer side.
 * @return The calculated length of the other side to form a golden rectangle.
 *         Returns `-1.0f` if `givenSide` is not positive, indicating an invalid input.
 */
fun makeRectGolden(givenSide: Float, isShorterSide: Boolean): Float {
    if (givenSide <= 0) return -1f

    val goldenRatio = ((1 + sqrt(5.0)) / 2).toFloat()

    return if (isShorterSide) {
        givenSide * goldenRatio
    } else {
        givenSide / goldenRatio
    }
}