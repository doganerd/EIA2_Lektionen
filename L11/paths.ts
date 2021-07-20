namespace Virus {
    export let virusPaths: Path2D[];
    export let cellPath: Path2D;


    export function createPaths(): void {
        virusPaths = createVirusPaths();
        cellPath = createCellPath();
    }

    function createVirusPaths(_shapes: number[][][]): Path2D[] {
        let paths: Path2D[] = [];
        for (let type of _shapes) {
            let path: Path2D = new Path2D();
            let first: boolean = true;
            // console.group(type);
            for (let coordinates of type) {
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            // console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }

    function createCellPath(): Path2D {
        let path: Path2D = new Path2D();
        path.moveTo(20, 13);
        path.lineTo(27, 3);
        path.lineTo(38, 3);
        path.lineTo(43, 13);
        path.lineTo(59, 25);
        path.lineTo(45, 35);
        path.lineTo(18, 35);
        path.lineTo(4, 25);
        path.lineTo(20, 13);
        path.lineTo(43, 13);
        path.closePath();

        path.moveTo(4, 25);
        path.lineTo(59, 25);
        path.closePath();
        return path;
    }
}