const tsLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/
};

const cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};

const fileLoader = {
  test: /\.(png|svg|jpg|gif)$/,
  use: 'file-loader'
}

const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: 'file-loader'
}


module.exports = {
  rules: [
    tsLoader,
    cssLoader,
    fileLoader,
    fontLoader
  ]
}
