with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "node";
  buildInputs = [
    nodejs-14_x
    yarn
  ];
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
  '';
}