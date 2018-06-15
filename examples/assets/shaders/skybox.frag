uniform samplerCube texture0;
uniform vec3 cameraPosition;

in vec3 coords;

layout (location = 0) out vec4 color;
layout (location = 1) out vec4 position;

void main() {
    color = texture(texture0, coords);
    position = vec4(cameraPosition + normalize(coords) * 100.f, 1.0);
}
