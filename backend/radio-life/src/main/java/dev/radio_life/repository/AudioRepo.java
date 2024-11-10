package dev.radio_life.repository;

import dev.radio_life.model.AudioFile;
import org.springframework.data.repository.ListCrudRepository;

public interface AudioRepo extends ListCrudRepository<AudioFile, Long> {


}
