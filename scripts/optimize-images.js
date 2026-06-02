import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'public/assets/img',
  'src/assets'
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      console.log(`⏭️  Skipping ${dir} - directory not found`);
      continue;
    }

    console.log(`📁 Processing: ${dir}`);
    
    try {
      // Optimize PNG files
      const pngFiles = await imagemin([`${dir}/**/*.png`], {
        destination: dir,
        plugins: [
          imageminPngquant({
            quality: [0.6, 0.8],
            speed: 4
          })
        ]
      });

      if (pngFiles.length > 0) {
        console.log(`   ✅ Optimized ${pngFiles.length} PNG files`);
      }

      // Optimize JPG files
      const jpgFiles = await imagemin([`${dir}/**/*.{jpg,jpeg}`], {
        destination: dir,
        plugins: [
          imageminMozjpeg({ quality: 75 })
        ]
      });

      if (jpgFiles.length > 0) {
        console.log(`   ✅ Optimized ${jpgFiles.length} JPG files`);
      }

      // Optimize GIF files
      const gifFiles = await imagemin([`${dir}/**/*.gif`], {
        destination: dir,
        plugins: [
          imageminGifsicle({ optimizationLevel: 3 })
        ]
      });

      if (gifFiles.length > 0) {
        console.log(`   ✅ Optimized ${gifFiles.length} GIF files`);
      }

      // Optimize SVG files
      const svgFiles = await imagemin([`${dir}/**/*.svg`], {
        destination: dir,
        plugins: [
          imageminSvgo({
            plugins: [
              { removeViewBox: false },
              { cleanupIDs: false }
            ]
          })
        ]
      });

      if (svgFiles.length > 0) {
        console.log(`   ✅ Optimized ${svgFiles.length} SVG files`);
      }

      // Convert PNG to WebP
      const pngToWebp = await imagemin([`${dir}/**/*.png`], {
        destination: dir,
        plugins: [
          imageminWebp({ quality: 75 })
        ]
      });

      if (pngToWebp.length > 0) {
        console.log(`   ✅ Converted ${pngToWebp.length} PNG to WebP`);
      }

    } catch (error) {
      console.error(`   ❌ Error processing ${dir}:`, error.message);
    }

    console.log();
  }

  console.log('✨ Image optimization complete!\n');
  printSummary();
}

function printSummary() {
  console.log('📊 Summary:');
  console.log('   • PNG files compressed with pngquant');
  console.log('   • JPG files optimized with mozjpeg');
  console.log('   • GIF files optimized with gifsicle');
  console.log('   • SVG files cleaned with svgo');
  console.log('   • WebP versions created for PNG files');
  console.log('\n💡 Note: Check file sizes with: du -sh public/assets/img\n');
}

optimizeImages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
