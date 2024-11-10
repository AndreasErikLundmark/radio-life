package dev.radio_life.service;

import dev.radio_life.model.AudioFile;
import dev.radio_life.repository.AudioRepo;
import dev.radio_life.storage.FileSystemStorageService;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.List;

@Service
public class RadioService {

    private final AudioRepo audioRepo;

    private final FileSystemStorageService fileStorageService;

    public RadioService(AudioRepo audioRepo, FileSystemStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
        this.audioRepo = audioRepo;
    }

    public void store(MultipartFile file, Path path) {
        String fileName = file.getOriginalFilename();
        long fileSize = file.getSize();
        audioRepo.save(new AudioFile(fileName, path.toString(), fileSize));

    }

    public List<AudioFile> findAll() {
        return audioRepo.findAll();
    }
    public Resource getFileByName(String name) {
        return fileStorageService.loadAsResource(name);
    }
}
