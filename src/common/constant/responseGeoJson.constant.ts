import { Feature, FeatureCollection, Geometry } from 'geojson';

export function FeatureCollectionGeoJson<T = any>(
  geometries: { geom: any; properties?: T }[],
): FeatureCollection<Geometry, T> {
  return {
    type: 'FeatureCollection',
    features: geometries
      .map((item): Feature<Geometry, T> | null => {
        try {
          if (!item.geom) return null;

          const geometry =
            typeof item.geom === 'string' ? JSON.parse(item.geom) : item.geom;

          return {
            type: 'Feature',
            geometry,
            properties: item.properties ?? ({} as T),
          };
        } catch (err) {
          console.error('Parse error:', item.geom);
          return null;
        }
      })
      .filter(Boolean) as Feature<Geometry, T>[],
  };
}
