$nodePath = "C:\Program Files\nodejs"
$env:Path = "$nodePath;$env:Path"

# Install dependencies
& "$nodePath\npm.cmd" install

# Start the development server
& "$nodePath\npm.cmd" run dev
